package mongo

import (
	"fmt"
	"log"

	"golang.org/x/crypto/bcrypt"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

const (
	mongo  = "mongodb://mongo:27017"
	dbName = "psy"
	dbCol  = "admins"
)

type Psyholog struct {
	Login    string `json:"login"`
	Password string `json:"password"`
}

func SignUP(log, pass string) string {
	conn := MonConn()
	defer conn.Close()
	var ps Psyholog
	user := conn.DB(dbName).C(dbCol)
	user.Find(bson.M{"login": log}).One(&ps)
	if len(ps.Login) != 0 {
		return "in db"
	} else {
		hPass := hashAndSalt([]byte(pass))
		err := user.Insert(&Psyholog{Login: log, Password: hPass})
		if err != nil {
			fmt.Println(err)
		}
		return "nice"
	}
}

func SignIN(log, pass string) string {
	conn := MonConn()
	defer conn.Close()
	var ps Psyholog
	user := conn.DB(dbName).C(dbCol)
	user.Find(bson.M{"login": log}).One(&ps)
	if len(ps.Login) == 0 {
		return "not reg"
	}
	checkPass := comparePasswords(ps.Password, []byte(pass))
	switch checkPass {
	case false:
		return "bad pass"
	}
	return "nice"
}

// For hash pass
func hashAndSalt(pwd []byte) string {
	hash, err := bcrypt.GenerateFromPassword(pwd, bcrypt.MinCost)
	if err != nil {
		log.Println(err)
	}
	return string(hash)
}

func comparePasswords(hashedPwd string, plainPwd []byte) bool {
	byteHash := []byte(hashedPwd)
	err := bcrypt.CompareHashAndPassword(byteHash, plainPwd)
	if err != nil {
		return false
	}
	return true
}

// For mongo session
func MonConn() *mgo.Session {
	session, err := mgo.Dial(mongo)
	if err != nil {
		log.Println(err)
	}
	return session
}

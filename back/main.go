package main

import (
	"net/http"

	"./mongo"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/check", func(c *gin.Context) { // Тестовый запрос (онлайн или нет - подкасты и чаты)
		c.JSON(200, gin.H{
			"message": "nice",
		})
	})

	r.POST("/up", func(c *gin.Context) { // регистрация психолога (/up)
		UpIn("up", c)
	})

	r.POST("/in", func(c *gin.Context) { // авторизация психолога (/in)
		UpIn("in", c)
	})

	r.Run()
}

func UpIn(w string, c *gin.Context) {
	var user mongo.Psyholog
	c.BindJSON(&user)
	if len(user.Login) == 0 {
		c.JSON(http.StatusOK, gin.H{"resp": "empty log"})
	} else if len(user.Password) == 0 {
		c.JSON(http.StatusOK, gin.H{"resp": "empty pass"})
	} else {
		switch w {
		case "in":
			{
				resp := mongo.SignIN(user.Login, user.Password)
				c.JSON(http.StatusOK, gin.H{"resp": resp}) // response - {"resp":true} or {"resp":"false"}
			}
		case "up":
			{
				resp := mongo.SignUP(user.Login, user.Password)
				c.JSON(http.StatusOK, gin.H{"resp": resp}) // response - {"resp":true} or {"resp":"false"}
			}
		}
	}

}

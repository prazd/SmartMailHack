FROM golang:latest
RUN mkdir /goapp
ADD . /goapp

WORKDIR /goapp

RUN go get golang.org/x/crypto/bcrypt
RUN go get gopkg.in/mgo.v2
RUN go get gopkg.in/mgo.v2/bson
RUN go get github.com/gin-gonic/gin

RUN go build -o main .
RUN echo "export Check=100023 >> .bashrc" 

EXPOSE 8080
CMD ['/goapp/main']



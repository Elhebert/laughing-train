package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/Elhebert/laughing-train/server/models"
	"github.com/Elhebert/laughing-train/server/routers"
)

func init() {
	models.Setup()
}

func main() {
	gin.SetMode("debug")

	routersInit := routers.InitRouter()
	readTimeout := 60 * time.Second
	writeTimeout := 60 * time.Second
	endPoint := fmt.Sprintf(":%d", 8000)
	maxHeaderBytes := 1 << 20

	server := &http.Server{
		Addr:           endPoint,
		Handler:        routersInit,
		ReadTimeout:    readTimeout,
		WriteTimeout:   writeTimeout,
		MaxHeaderBytes: maxHeaderBytes,
	}

	log.Printf("[info] start http server listening %s", endPoint)

	server.ListenAndServe()
}

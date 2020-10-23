package routers

import (
	"github.com/gin-gonic/gin"

	v1 "github.com/Elhebert/laughing-train/server/routers/api/v1"
)

// InitRouter initialize routing information
func InitRouter() *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	r.POST("/user", v1.CreateUser)

	return r
}

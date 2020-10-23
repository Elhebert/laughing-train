package v1

import (
	"net/http"

	userservice "github.com/Elhebert/laughing-train/server/service"
	"github.com/Elhebert/laughing-train/server/utils"
	"github.com/gin-gonic/gin"
)

// CreateUserForm struct
type CreateUserForm struct {
	UserID   string `form:"userID" valid:"Required;MaxSize(100)"`
	Password string `form:"password" valid:"Required;MaxSize(100)"`
}

// CreateUser function creates a user
func CreateUser(c *gin.Context) {
	var (
		form CreateUserForm
	)

	httpCode, errCode := utils.BindAndValid(c, &form)
	if errCode != 200 {
		c.Status(httpCode)
		return
	}

	userService := userservice.User{
		UserID:   form.UserID,
		Password: form.Password,
	}
	if err := userService.Create(); err != nil {
		c.Status(http.StatusInternalServerError)
		return
	}

	c.Status(http.StatusOK)
}

package userservice

import (
	"github.com/Elhebert/laughing-train/server/models"
)

// User struct
type User struct {
	UserID   string
	Password string
}

// Create a user
func (a *User) Create() error {
	user := map[string]interface{}{
		"userID":   a.UserID,
		"password": a.Password,
	}

	if err := models.CreateUser(user); err != nil {
		return err
	}

	return nil
}

package models

import (
	"gorm.io/gorm"
)

// User Model
type User struct {
	gorm.Model

	UserID   string `json:"userID"`
	Password string `json:"password"`
}

// ExistUserByID checks if an article exists based on ID
func ExistUserByID(userID string) (bool, error) {
	var user User
	err := db.Select("userID").Where("userID = ? AND deleted_on = ? ", userID, 0).First(&user).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return false, err
	}

	if user.ID > 0 {
		return true, nil
	}

	return false, nil
}

// GetUser Get a single user based on ID
func GetUser(userID string) (*User, error) {
	var user User
	err := db.Where("userID = ? AND deleted_on = ? ", userID, 0).First(&user).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, err
	}

	err = db.Model(&user).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, err
	}

	return &user, nil
}

// CreateUser add a single article
func CreateUser(data map[string]interface{}) error {
	user := User{
		UserID:   data["userID"].(string),
		Password: data["password"].(string),
	}
	if err := db.Create(&user).Error; err != nil {
		return err
	}

	return nil
}

// DeleteUser delete a single article
func DeleteUser(userID string) error {
	if err := db.Where("userID = ?", userID).Delete(User{}).Error; err != nil {
		return err
	}

	return nil
}

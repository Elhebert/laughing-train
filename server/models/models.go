package models

import (
	"fmt"
	"log"

	"github.com/Elhebert/laughing-train/server/settings"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

// Setup initializes the database instance
func Setup() {
	var err error

	db, err := gorm.Open(mysql.New(mysql.Config{
		DriverName: "mysql",
		DSN: fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local",
			settings.DatabaseSetting.User,
			settings.DatabaseSetting.Password,
			settings.DatabaseSetting.Host,
			settings.DatabaseSetting.Name,
		)}), &gorm.Config{})

	if err != nil {
		log.Fatalf("models.Setup err: %v", err)
	}

	sqlDB, err := db.DB()

	if err != nil {
		log.Fatalf("models.Setup err: %v", err)
	}

	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetMaxOpenConns(100)
}

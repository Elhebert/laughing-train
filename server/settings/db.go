package settings

import "os"

type database struct {
	Type        string
	User        string
	Password    string
	Host        string
	Name        string
	TablePrefix string
}

// DatabaseSetting envs
var DatabaseSetting = database{
	Type:        os.Getenv("DATABASE_TYPE"),
	User:        os.Getenv("DATABASE_USER"),
	Password:    os.Getenv("DATABASE_PASS"),
	Host:        os.Getenv("DATABASE_HOST"),
	Name:        os.Getenv("DATABASE_NAME"),
	TablePrefix: os.Getenv("DATABASE_TABLE_PREFIX"),
}

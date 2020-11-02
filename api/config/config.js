require("dotenv").config()

module.exports =
    {
        "development": {
            "username": "postgres",
            "password": "root",
            "database": "database_development",
            "host": "books_db_1",
            "dialect": "postgres"
        },
        "test": {
            "username": "postgres",
            "password": "root",
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "production": {
            "username": "postgres",
            "password": "root",
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "postgres"
        }
    }

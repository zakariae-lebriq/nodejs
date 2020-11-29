import fs from "fs"
import path from "path"
import Sequelize from "sequelize"
import configJson from "../config/config.js"

const basename = path.basename(__filename)
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development"
const config = configJson[env]
const db = {}

let sequelize

if (env == "production") {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASS, {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: process.env.DIALECT,
            dialectOptions: {
                native: true
            },
            logging: true
        }
    );
} else {
    sequelize = new Sequelize(
        config.database, config.username, config.password, config
    );
}

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') != 0 &&
            (file !== basename) && (file.slice(-3) === '.js'))
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize)
        db[model.name] = model
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.books = require("./book")(sequelize, Sequelize)
db.authors = require("./author")(sequelize, Sequelize)

db.authors.hasMany(db.books, {
    foreignKey: {
        name: "author_id",
        allowNull: false
    },
    as: "book"
})

db.books.belongsTo(db.authors, {
    foreignKey: {
        name: "author_id",
        allowNull: false
    },
    as: "author"
})

export default db
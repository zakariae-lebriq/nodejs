import fs from "fs"
import path from "path"
import Sequelize from "sequelize"
import configJson from "../config/config.js"

const basename = path.basename(__filename)
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development"

const config = configJson[env]

console.log('this is the environment: ', env)

const db = {}

let sequelize
if (config.environment === "production") {
    sequelize = new Sequelize(
        process.env["production"], config
    );

    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASS, {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "postgres",
            dialectOptions: {
                ssl: true,
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

export default db
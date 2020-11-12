import express from "express"
import bookRoutes from  "./routes/book"
import authorRoutes from  "./routes/author"
import db from "./models/index"

import cors from "cors"
const app = express()
const port = "3000"


db.sequelize.sync({force :  false }).then(() => {
        console.log("database has been sync")
})

app.use(cors())

app.use("/library/api/v1/books",bookRoutes)
app.use("/library/api/v1/authors",authorRoutes)

app.listen(port, () => {
        console.log("My node js serve is running at port 3000")
})
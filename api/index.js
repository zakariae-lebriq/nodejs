import express from "express"
const app = express()
const port = "3000"

app.get("/",(_,res) => {
        res.send("Hello from node")
})


app.listen(port, () => {
        console.log("My node js serve is running at port 3000")
})
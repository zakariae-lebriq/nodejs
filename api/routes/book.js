import {Router} from "express"
import bookController from "../controllers/book"
import bodyParser from "body-parser"

const router = Router()
const jsonParser = bodyParser.json()

router.get("/all", bookController.books)
router.get("/one/by/id", bookController.bookById)
router.get("/one/by/title", bookController.bookByTitle)
router.post("/add", bookController.addBook)
router.put("/update", jsonParser, bookController.updateBook)
router.delete("/delete", bookController.deleteBook)

export default router
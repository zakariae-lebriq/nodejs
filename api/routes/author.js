import {Router} from "express"
import authorController from "../controllers/author"
import bodyParser from  "body-parser"
const jsonParser =  bodyParser.json()

const router = Router()

router.get("/all", authorController.authors)
router.get("/one", authorController.authorById)
router.post("/add", authorController.addAuthor)
router.put("/update", jsonParser, authorController.updateAuthor)
router.delete("/delete", authorController.deleteAuthor)


export default router
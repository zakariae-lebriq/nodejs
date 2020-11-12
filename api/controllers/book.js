import bookService from "../services/book"

export default class {
    static async books(_, res) {
        try {
            const allBooks = await bookService.books()
            res.status(200).json(allBooks)
        } catch (error) {
            res.status(404).json(error)
        }
    }

    static async bookById(req, res) {
        try {
            const id = req.query.id
            const book = await bookService.bookById(id)
            res.status(200).json(book)
        } catch (error) {
            res.status(404).json(error)
        }
    }

    static async bookByTitle(req, res) {
        try {
            const title = req.query.title
            const book = await bookService.bookByTile(title)
            res.status(200).json(book)
        } catch (error) {
            res.status(404).json(error)
        }
    }

    static async addBook(req, res) {
        try {

            if (!req.query.title) {
                res.status(404).send({
                    message: "title not found"
                })
                return
            }

            if (!req.query.author) {
                res.status(404).send({
                    message: "author not found"
                })
                return
            }


            const title = req.query.title
            const editionDate = Date.now()
            const createdAt = Date.now()
            const updatedAt = Date.now()
            const author = Number(req.query.author)

            await bookService.addBook(title, editionDate, createdAt, updatedAt,author)

            res.status(201).json("Book created successfully")
        } catch (error) {
            console.log(error)
            res.status(404).json(error)
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.query.id
            const body = req.body;

            console.log(id)
            console.log(body)

            await bookService.updateBook(id, body)

            res.status(200).send({
                message: "book has been updated successfully"
            })

        } catch (error) {
            res.status(404).send({
                message: error.message
            })
        }
    }

    static async deleteBook(req, res) {
        try {
            const id = req.query.id
            await bookService.deleteBook(id)
            res.status(204).send()
        } catch (error) {
            res.status(404).send({
                message: error.message
            })
        }
    }


}
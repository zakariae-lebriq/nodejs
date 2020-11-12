import authorService from "../services/author"

export default class {
    static async authors(_, res) {
        try {
            const allAuthors = await authorService.authors()
            res.status(200).json(allAuthors)
        } catch (error) {
            res.json(error)
        }
    }

    static async authorById(req, res) {
        try {
            const id = req.query.id
            const author = await authorService.authorById(id)
            res.status(200).json(author)
        } catch (error) {
            res.status(404).send(
                {
                    message: error.message
                }
            )
        }
    }

    static async addAuthor(req, res) {
        try {
            const firstName = req.query.firstName
            const lastName = req.query.lastName
            await authorService.addAuthor(firstName, lastName)
            res.status(201).send({
                message: "author has been added successfully"
            })
        } catch (error) {
            res.status(404).send(
                {
                    message: error.message
                }
            )
        }
    }

    static async updateAuthor(req, res) {
        console.log("update author")
        try {
            const id = req.query.id
            const body = req.body
            console.log(id)
            console.log(body)
            await authorService.updateAuthor(id, body)
            res.status(201).send({
                message: "author information has been updated successfully"
            })
        } catch (error) {
            res.status(404).send(
                {
                    message: error.message
                }
            )
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const id = req.query.id
            await authorService.deleteAuthor(id)
            res.status("204").send({
                message: "author has been removed successfully"
            })
        } catch (error) {
            res.status(404).send()
        }
    }


}
import db from "../models/index"

const Author = db.authors

/**
 * This class provides all methods to manage CRUD operations on Author Model
 */
export default class {

    /**
     * select all Authors from database
     *
     * @returns {Promise<*>}
     */
    static async authors() {
        try {
            const authors = await Author.findAll()
            return authors
        } catch (error) {
            throw error
        }
    }

    /**
     * Select Author from database by its id
     *
     * @param id
     * @returns {Promise<Author>}
     */
    static async authorById(id) {
        try {
            return await Author.findByPk(id)
        } catch (error) {
            throw error
        }
    }


    /**
     * Register new Author
     *
     * @param firstName
     * @param lastName
     * @returns {Promise<Author>}
     */
    static async addAuthor(firstName, lastName) {
        try {
            const author = {
                firstName: firstName,
                lastName: lastName
            }
            return await Author.create(author)
        } catch (error) {
            throw  error
        }
    }

    /**
     * Update an existing author
     *
     * @param id
     * @param body
     * @returns {Promise<[number, Author[]]>}
     */
    static async updateAuthor(id, body) {
        try {
            console.log("update author")
            return await Author.update(body, {
                where: {id: id}
            })
        } catch (error) {
            throw  error
        }
    }

    /**
     * Delete an existing Author
     *
     * @param id
     * @returns {Promise<number>}
     */
    static async deleteAuthor(id) {
        try {

            return await Author.destroy({
                where: {id: id}
            })
        } catch (error) {
            throw  error
        }
    }
}
import db from "../models"
import authorsService from "./author"

const Book = db.books

/**
 * This class provides all methods to manage CRUD operations on Book Model
 */
export default class {

    /**
     * Select all Books from the database
     *
     * @returns {Promise<Book[]>}
     */
    static async books() {
        try {
            return await Book.findAll()
        } catch (error) {
            throw error
        }
    }


    /**
     * Select a Book its id
     *
     * @param id
     * @returns {Promise<Book>}
     */
    static async bookById(id) {
        try {
            return await Book.findByPk(id)
        } catch (error) {
            throw error
        }
    }

    /**
     * Select a Book by its title
     *
     * @param title
     * @returns {Promise<Book>}
     */
    static async bookByTile(title) {
        try {
            return await Book.findOne({where: {title: title}})
        } catch (error) {
            throw error
        }
    }

    /**
     * Create new Book in the database
     *
     * @param title
     * @param editionDate
     * @param createdAt
     * @param updateAt
     * @param author
     * @returns {Promise<Book>}
     */
    static async addBook(title, editionDate, createdAt, updateAt, author) {
        try {
            console.log("author id  " + author)

            const book = {
                title: title,
                editionDate: editionDate,
                createdAt: createdAt,
                updateAt: updateAt,
                author_id: author
            };

            console.log(book)
            return await Book.create(book)
        } catch (error) {
            throw error
        }
    }

    /**
     * Update an existing Book
     *
     * @param id
     * @param body
     * @returns {Promise<[number, Book[]]>}
     */
    static async updateBook(id, body) {
        try {
            return await Book.update(body, {
                where: {id: id}
            })
        } catch (error) {
            throw error
        }
    }


    /**
     * Delete an existing Book
     *
     * @param id
     * @returns {Promise<number>}
     */
    static async deleteBook(id) {
        try {
            return await Book.destroy({
                where: {id: id}
            })
        } catch (error) {
            throw error
        }
    }

}
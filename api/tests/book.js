import chai from "chai"
import chaiHttp from "chai-http"
import  'chai/register-should'
import app from "../index"

chai.use(chaiHttp)
const { expect } = chai

describe('testing the book endpoints:', () =>{
    it('It should get a particular book with id', (done)  => {
        const bookId =1
        const book ={
            "id": 1,
            "title": "toDelete",
            "author_id": 1
        }
        chai.request(app)
            .get(`/library/api/v1/books/one/by/id?id=${bookId}`)
            .set("accept","application/json")
            .end((err,res) =>{
                expect(res.status).to.equals(200)
                expect(res.body).to.include(book)
                done()
            })
    })
})
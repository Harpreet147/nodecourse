const request = require("supertest");
const expect = require("expect");
const { todo } = require("../model/todos");
const { app } = require("../server");


it("get test case for todo", (done) => {
    request(app).get("/todo")
    .expect(200)
    .expect((res)=>{
        expect(res.body.docs.length).toBe(5);
    }).end(done);
})
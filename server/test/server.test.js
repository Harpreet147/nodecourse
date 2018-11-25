const expect = require("expect");
const request = require("supertest");
const { app } = require("../server");
const { todo } = require("../model/todos");
it("get method test", (done) => {
    request(app)
        .get("/")
        .expect(200)
        .end(done);
});

beforeEach((done)=>{
    todo.remove({}).then(()=>done());

})

it("post method test case", (done) => {
    let _todo = { text: 'drinking coffee', completed: true };
    request(app)
        .post("/todo")
        .send(_todo)
        .expect(200).expect((res) => {
            expect(res.body).toInclude({
                text: _todo.text,
                completed: _todo.completed
            });
        }).end((err, res) => {
            if (err) {
                return done(err);
            }
            todo.find().then((todo) => {
                expect(todo.length).toBe(1);
                expect(todo[0].text).toBe(_todo.text);
                done();
            }).catch((e)=>{
                return done(e);
            });
        });
})

// it("post method test", (done) => {
//     const text = 'sample text';
//     request(app)
//         .post("/todo")
//         .send({ text: text, completed: true })
//         .expect(200)
//         .expect((res) => {
//             expect(res.body.text).toEqual(text)
//         }).end((err, res) => {
//             if(err){
//                 return done(err);
//             }
//             todo.find().then((resTodos)=>{
//                 expect(resTodos.length).toBe(1);
//                 done();
//             }).catch((e)=>{
//                 done(e);
//             })
//         });
// }).timeout(20000);
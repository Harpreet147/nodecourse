const express = require("express");
const app = express();
const { todo } = require('./model/todos');
const bodyParser = require("body-parser");
const {ObjectID} = require('mongodb');
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("app works!");
})
app.post("/todo", (req, res) => {
    const text = req.body.text;
    const completed = req.body.completed;
    const newTodo = new todo({
        text: text,
        completed: completed,
        completedAt: 123
    });

    newTodo.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => {
        res.status(500).send(e);
    })
})
app.get("/todo", (req, res) => {
    todo.find().then((docs) => {
        res.status(200).send({ docs });
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => {
        res.status(500).send(e);
    })
});
app.get("/todo/:id",(req,res)=>{
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(500).send('id is not valid');
    }
    todo.findById(id).then((doc)=>{
        res.status(200).send(doc);
    },(e)=>{
        res.status(500).send(e);
    })
})
app.listen(3000, () => {
    console.log("port listen at 3000");
})

module.exports = { app };
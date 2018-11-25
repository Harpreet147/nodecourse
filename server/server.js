const express = require("express");
const app = express();
const {todo} = require('./model/todos');
const bodyParser = require("body-parser");

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
app.listen(3000, () => {
    console.log("port listen at 3000");
})

module.exports={app};
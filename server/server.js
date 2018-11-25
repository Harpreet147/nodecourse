//advantages of moongoes

//it is an ORM -
//provide us Schema based model
//which make it easier to make relationship between collections
//provide inbuild validation methods
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Todo");

//how to crate a schema based model
const todo = mongoose.model("todos", {
    text: {
        type: String,
        minlength: 1,
    },
    completed: {
        type: Boolean,
        minlength: 1
    },
    completedAt: {
        type: Number,
        minlength: 1
    }
});
//create instance of model
var newTodo = new todo({
    text: 'eating chocolates',
    completed: 1,
    completedAt: 123
});
//save model
newTodo.save().then((doc) => {
    console.log("saved successfully");
}, (e) => {
    console.log(e);
})


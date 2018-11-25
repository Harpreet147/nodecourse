const {mongoose} = require('../db/mongoose');
const todo = mongoose.model("todos", {
    text: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        minlength: 1,
    },
    completedAt: {
        type: Number,
        minlength: 1
    }
});

module.exports = { todo };
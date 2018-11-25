const { ObjectID } = require("mongodb");
const { todo } = require("../server/model/todos");



todo.findById('5bfac5784629d446d4acf619').then((doc) => {
    if (!doc) {
        console.log('data not found');
        return;
    }
    console.log(JSON.stringify(doc,null,5));
}, (e) => {
    console.log(e);
}).catch((e) => {
    console.log(e);
})
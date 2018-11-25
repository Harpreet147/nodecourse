const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    const db = client.db("Todo");
    if (err) {
        console.log("mongo is not connected");
    }
    //deleting many document
    //delete multiple documents based on condition
    // db.collection("todos").deleteMany({ text: 'drinkingcoffee' }).then((docs) => {
    //     console.log(docs);
    // }, (e) => {
    //     console.log(e);
    // })
    //deleting a single document
    //delete the single document
    // db.collection("todos").deleteOne({ _id: new ObjectID('5bfa863fcc9ce92618021691') })
    //     .then((doc) => {
    //         console.log(JSON.stringify(doc, null, 5));
    //     }, (e) => {
    //         console.log(JSON.stringify(e));
    //     })
    //find and delete a document
    //it will delete the record from database and as well as reutrn the same document
    db.collection("todos").findOneAndDelete({ _id: new ObjectID('5bfa86208d98ea1af84a8647') })
        .then((doc) => {
            console.log(JSON.stringify(doc, null, 3));
        }, (e) => {
            console.log(JSON.stringify(e));
        })
});
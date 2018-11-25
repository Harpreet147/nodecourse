const { MongoClient, ObjectID } = require("mongodb");



// MongoClient.connect("mongodb://localhost:27017", (err, client) => {
//     //get database   
//     const db = client.db("Todo");
//     if (err) {
//         console.log("mongo is not connected");
//     }
//     db.collection("todos").insertOne({
//         text: "drinking coffee",
//         completed: true
//     }, (err, doc) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(doc.ops[0]._id.getTimestamp());
//     });
// });

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    const db = client.db("Todo");
    if (err) {
        console.log("mongo is not connected");
    }
    db.collection("todos").findOne({ _id: new ObjectID('5bfa84d0549c3b35d40a272d') }).then((docs) => {
        console.log(JSON.stringify(docs, null, 5));
    }, (e) => {
        console.log(e);
    })
});
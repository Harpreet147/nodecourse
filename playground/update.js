const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    const db = client.db("Todo");
    if (err) {
        console.log("mongo is not connected");
    }
    //update methods
    //update many
    //update single document based on condition
    // if multiple condition mathced then it will update the first matched condition
    // db.collection('todos')
    //     .update({ text: 'eating apple' }, {
    //         $set: {
    //             completed: true,
    //             text: 'all done!'
    //         }
    //     }).then((docs) => {
    //         console.log(docs);
    //         return;
    //     }, (e) => {
    //         console.log(e);
    //     })
    //update multiple records based on conditon
    // db.collection('todos')
    //     .updateMany({ text: 'eating apple' }, {
    //         $set: {
    //             completed: true,
    //             text: 'all done!'
    //         }
    //     }).then((docs) => {
    //         console.log(docs);
    //         return;
    //     }, (e) => {
    //         console.log(e);
    //     })
    //updateOne
    //update single docment based on condition
    // db.collection('todos').updateOne({ _id: new ObjectID('5bfa9aea5eb66a4542a4d108') }, {
    //     $set: {
    //         text: 'update once',
    //         completed: true
    //     }
    // })
    //     .then((doc) => {
    //         console.log(doc);
    //     }, (e) => {
    //         console.log(e);
    //     })
    //findOneAndUpdate
    //will delete the current document and return the same document
    // with new or old values
    db.collection('todos').findOneAndUpdate({ _id: new ObjectID('5bfa9ad65eb66a4542a4d100') }, {
        $set: {
            text: 'find and update',
            completed: true
        }

    }, {
        returnOriginal: false
        })
        .then((doc) => {
            console.log(doc);
            return;
        }, (e) => {
            console.log(e);
        })
});
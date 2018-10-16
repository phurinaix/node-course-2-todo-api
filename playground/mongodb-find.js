const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('Users').find({name: 'Andrew'}).count().then((count) => {
    //     console.log(`Users Andrew count: ${count}`);
    // }).catch((err) => {
    //     console.log('Unable to fetch users', err);
    // })

    // db.close();
});
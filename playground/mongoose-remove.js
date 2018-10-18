const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bc7fcc1e9f59f92d75b8320'}).then((todo) => {

});

Todo.findByIdAndRemove('5bc7fcc1e9f59f92d75b8320').then((todo) => {
    console.log(todo);
});
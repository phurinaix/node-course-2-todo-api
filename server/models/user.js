const mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trime: true,
        minlength: 1
    }
});

module.exports = {User};
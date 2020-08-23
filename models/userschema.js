var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username:{
        type :String,
        required :true
    },
    password : {
        type :String,
        required :true
    }
})

var user = mongoose.model('user', userSchema,'users');

module.exports = user;
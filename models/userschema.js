var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    middlename:{
        type:String,
    },
    username:{
        type :String,
        required :true
    },
    password : {
        type :String,
        required :true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    roles:{
        type:String,
        default:'normaluser'
    }
})

var user = mongoose.model('user', userSchema,'users');

module.exports = user;
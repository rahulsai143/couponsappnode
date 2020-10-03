/**
 * module dependencies
 */

 var mongoose = require('mongoose');

 var tokenSchema = new mongoose.Schema({
    token :{
        type : String,
        required:true
    },
    user:{
        type:mongoose.isValidObjectId,
        ref:'userSchema',
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    }
 });
 
 var token = mongoose.model('token',tokenSchema,'tokens');

 module.exports = token;

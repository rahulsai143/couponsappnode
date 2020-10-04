/**
 * module dependencies
 */

const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
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
 
const token = mongoose.model('token',tokenSchema,'tokens');

module.exports = token;

var mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };

var userSchema = new mongoose.Schema({
    username:{
        type :String,
        required :true
    },
    password : {
        type : String,
        required :true
    }
},opts);

userSchema.virtual('usernamegetterandsetter').get(function(){
    return this.username;
}).set(function(username){
    this.set({username});
})

userSchema.virtual('passwordgetterandsetter').get(function(){
    return this.password;
}).set(function(password){
    this.set({password});
})

userSchema.method('toJSON',function(user){
    var data = {
        id : this._id,
        username : this.username,
        password : this.password
    }
    return data;
})

var user = mongoose.model('user', userSchema,'users');

module.exports = user;
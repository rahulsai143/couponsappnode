/**
*
*    module dependencies
*/
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const opts = { toJSON: { virtuals: true } };

const userSchema = new mongoose.Schema({
    firstName:{
        type :String,
        required :true,
        trim: true,
        maxlength: 100
    },
    lastName:{
        type :String,
        required :true,
        trim: true,
        maxlength: 100
    },
    userName:{
        type :String,
        required :true,
        unique : true,
        trim: true,
        maxlength: 100
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password : {
        type : String,
        required :true,
    },
    profilePicUrl: {
      type: String,
      trim: true
    },
    roles: [{
        type: ObjectId,
        ref: 'Role',
        required: true
    }],
    verified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default : Date.now,
      required: true
    },
    updatedAt: {
      type: Date,
      default : Date.now,
      required: true
    },
},{
    versionKey: false,
  },opts);

userSchema.virtual('firstNameGetterAndSetter').get(function(){
    return this.firstName;
}).set(function(firstName){
    this.set({firstName});
})

userSchema.virtual('lastNameGetterAndSetter').get(function(){
    return this.lastName;
}).set(function(lastName){
    this.set({lastName});
})

userSchema.virtual('userNameGetterAndSetter').get(function(){
    return this.userName;
}).set(function(userName){
    this.set({userName});
})

userSchema.virtual('emailGetterAndSetter').get(function(){
    return this.email;
}).set(function(email){
    this.set({email});
})

userSchema.virtual('passwordGetterAndSetter').get(function(){
    return this.password;
}).set(function(password){
    this.set({password});
})

userSchema.virtual('profilePicUrlGetterAndSetter').get(function(){
    return this.profilePicUrl;
}).set(function(profilePicUrl){
    this.set({profilePicUrl});
})

userSchema.virtual('rolesGetterAndSetter').get(function(){
    return this.roles;
}).set(function(roles){
    this.set({roles});
})

userSchema.virtual('verifiedGetterAndSetter').get(function(){
    return this.verified;
}).set(function(verified){
    this.set({verified});
})

userSchema.virtual('statusGetterAndSetter').get(function(){
    return this.status;
}).set(function(status){
    this.set({status});
})

userSchema.virtual('createdAtGetterAndSetter').get(function(){
    return this.createdAt;
}).set(function(createdAt){
    this.set({createdAt});
})

userSchema.virtual('updatedAtGetterAndSetter').get(function(){
    return this.updatedAt;
}).set(function(updatedAt){
    this.set({updatedAt});
})



userSchema.method('toJSON',function(user){
    var data = {
        id : this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        userName : this.userName,
        email : this.email,
        password : this.password,
        profilePicUrl: this.profilePicUrl,
        roles :[],
        verified:this.verified,
        status:this.status,
        createdAt:this.createdAt,
        updatedAt:this.updatedAt
    }
    var roles = this.roles || [];
    data.roles = roles.map(function(user) {
        return user.toJSON(user) ? user._id : user;
    });
    return data;
})

const user = mongoose.model('user', userSchema,'users');

module.exports = user;
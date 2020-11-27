/**
*
*    module dependencies
*/
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const opts = { toJSON: { virtuals: true } };

const userSchema = new mongoose.Schema({
    name:{
        type :String,
        required :true,
        trim: true,
        maxlength: 100
    },
    username:{
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
      trim: true,
      select: false,
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
          required: true,
          select: false
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
      required: true,
      select: false,
    },
    updatedAt: {
      type: Date,
      default : Date.now,
      required: true,
      select: false,
    },
},{
    versionKey: false,
  },opts);

userSchema.virtual('namegetterandsetter').get(function(){
    return this.name;
}).set(function(name){
    this.set({name});
})

userSchema.virtual('usernamegetterandsetter').get(function(){
    return this.username;
}).set(function(username){
    this.set({username});
})

userSchema.virtual('emailgetterandsetter').get(function(){
    return this.email;
}).set(function(email){
    this.set({email});
})

userSchema.virtual('passwordgetterandsetter').get(function(){
    return this.password;
}).set(function(password){
    this.set({password});
})

userSchema.virtual('profilePicUrlgetterandsetter').get(function(){
    return this.profilePicUrl;
}).set(function(profilePicUrl){
    this.set({profilePicUrl});
})

userSchema.virtual('rolesgetterandsetter').get(function(){
    return this.roles;
}).set(function(roles){
    this.set({roles});
})

userSchema.virtual('verifiedgetterandsetter').get(function(){
    return this.verified;
}).set(function(verified){
    this.set({verified});
})

userSchema.virtual('statusgetterandsetter').get(function(){
    return this.status;
}).set(function(status){
    this.set({status});
})

userSchema.virtual('createdAtgetterandsetter').get(function(){
    return this.createdAt;
}).set(function(createdAt){
    this.set({createdAt});
})

userSchema.virtual('updatedAtgetterandsetter').get(function(){
    return this.updatedAt;
}).set(function(updatedAt){
    this.set({updatedAt});
})



userSchema.method('toJSON',function(user){
    var data = {
        id : this._id,
        name : this.name,
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
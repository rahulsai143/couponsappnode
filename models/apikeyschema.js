/**
*    module dependencies
*
*/ 

const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        maxlength: 1024,
    },
    version: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    metadata: {
        type: String,
        required: true,
        trim:true,
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
  versionKey: false
})

apiKeySchema.virtual('keygetterandsetter').get(function(){
    return this.key;
}).set(function(key){
    this.set({key});
})

apiKeySchema.virtual('versiongetterandsetter').get(function(){
    return this.version;
}).set(function(version){
    this.set({version});
})

apiKeySchema.virtual('metadatagetterandsetter').get(function(){
    return this.metadata;
}).set(function(metadata){
    this.set({metadata});
})

apiKeySchema.virtual('statusgetterandsetter').get(function(){
    return this.status;
}).set(function(status){
    this.set({status});
})


apiKeySchema.virtual('createdAtgetterandsetter').get(function(){
    return this.createdAt;
}).set(function(createdAt){
    this.set({createdAt});
})

apiKeySchema.virtual('updatedAtgetterandsetter').get(function(){
    return this.updatedAt;
}).set(function(updatedAt){
    this.set({updatedAt});
})

apiKeySchema.method('toJSON',function(user){
    const data = {
        id : this._id,
        key : this.key,
        version : this.version,
        metadata : this.metadata,
        status : this.status,
        createdAt : this.createdAt,
        updatedAt : this.updatedAt
    }
    return data;
})

const apiKey = mongoose.model('apikey', userSchema,'apikeys');
/**
*    module dependencies
*
*/
const express = require('express');
const mongoose = require('mongoose');
const db = require('../main');
const user = require('../models/userschema');
const bcrypt = require('bcrypt');

var route = express.Router();

route.post('/createuser',(req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.body.password === req.body.confirmPassword){
       return;
    }
    let userObject = new user();
    let saltRounds = 10;
    bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
        if (err) throw err;
    // Store username and hash password to DB.
        userObject.firstName= req.body.firstName;
        userObject.lastName = req.body.lastName;
        userObject.username = req.body.username;
        userObject.password = hash;
        userObject.profilePicUrl= req.body.profilePicUrl;
        userObject.roles = req.body.roles;
        userObject.verified = req.body.verified;
        userObject.status = req.body.status;
        userObject.createdAt = req.body.createdAt;
        userObject.updatedAt = req.body.updatedAt;
        userObject.save(function(err, data) {
        if (err) throw err;
            console.log(`${data.userName} is saved successfully`);
        });
    });
})

route.put('/updateuser/:id',(req,res)=>{
    
})

route.delete('/deleteuser/:id',(req,res) =>{
    
})   

module.exports = route;
const express = require('express');
const mongoose = require('mongoose');
const db = require('../main');
const user = require('../models/userschema');
const bcrypt = require('bcrypt');

var route = express.Router();

route.post('/createuser',(req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    let userObject = new user();
    let saltRounds = 10;
    bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
        if (err) throw err;
    // Store username and hash password to DB.
        userObject.username = req.body.username;
        userObject.password = hash;
        userObject.save(function(err, data) {
            if (err) throw err;
        });
    });
})

route.put('/updateuser/:id',(req,res)=>{
    
})

route.delete('/deleteuser/:id',(req,res) =>{
    
})   

module.exports = route;
var express = require('express');
var route = express.Router();
var mongoose = require('mongoose');
var db = require('../main');

var user = require('../models/userschema');


route.get('/login',(req,res) =>{
    var query = {
        'username':'rahulsai143'
    }
    user.find(query,function (err, document) {
        if (err) throw err;
    
})

route.post('/createuser',(req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    var userObject = new user({
            username: req.body.username, 
            password: req.body.password 
    })
    userObject.save( function(err, data) {
        if (err) throw err;  
        res.end(`${data.username} is inserted successfully`);
 })
})

route.put('/updateuser/:id',(req,res)=>{
    
})

route.delete('/deleteuser/:id',(req,res) =>{
    
})
    

module.exports = route;
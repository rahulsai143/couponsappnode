/**
 * module dependencies
 */
const express = require('express');
const route = express.Router();

const user = require('../models/userschema');

route.post('/createuser',(req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Create User');
})

route.put('/updateuser/:id',(req,res)=>{
    
})

route.delete('/deleteuser/:id',(req,res) =>{
    
})
    

module.exports = route;
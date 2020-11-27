    /**
* module dependencies
*
*/
const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../main');
const userSchema = require('../models/userschema');

const route = express.Router();

route.post('/login',(req,res) =>{
    compare(req,res);
})

route.get('/logout',(req,res)=>{
    
    res.redirect('/login');
})

async function compare(req,res){
       // Load hash from your password DB.
    const doc = await userSchema.findOne({
        username : req.body.username
    }).exec();
    const match = await bcrypt.compare(req.body.password,doc.password);
    if(match){
        res.send('login successful');
    }else {
        res.send('login unsuccessful');
    }
}

module.exports = route;
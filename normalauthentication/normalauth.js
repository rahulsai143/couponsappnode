var express = require('express');

var route = express.Route();

route.get('/login',(req,res) =>{
    
})

route.get('/logout',(req,res)=>{
        
        res.redirect('/login');
})
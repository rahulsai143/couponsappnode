var express = require('express');

var route = express.Route();

route.get('/login',(req,res) =>{
        var query = {'username': req.username};
        user.find(query,function (err, document) {
                if (err) throw err;
        })
});

route.get('/logout',(req,res)=>{
        
        res.redirect('/login');
})
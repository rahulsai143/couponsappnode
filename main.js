/**
*    module dependencies
*
*/
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const couponRouter = require('./couponsrouter/couponsrouter');

const app = express();

var db = null;

app.use(bodyparser.json());
app.use('/couponsapp',couponRouter);

app.get('/',(req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Home page');
})

// Initialize connection once
mongoose.connect('mongodb://127.0.0.1:27017/couponsapp', {
    socketTimeoutMS: 0,
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err, database) => {
  if(err) throw err;
  db = database;
  // Start the application after the database connection is ready
  app.listen(3000);
  console.log('the server is up and running');
})

module.exports = db;
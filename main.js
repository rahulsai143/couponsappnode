/**
 *    module dependencies
 *
 */
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const couponrouter = require("./couponsrouter/couponsrouter");
const normalauth = require("./normalauthentication/normalauth");

const app = express();

var db = null;

app.use(bodyparser.json());
app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Headers":
      "sessionId, Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With",
    exposedHeaders: ["sessionId"],
    "Access-Control-Allow-Methods": [
      "GET",
      "HEAD",
      "PUT",
      "PATCH",
      "POST",
      "DELETE",
    ],
    preflightContinue: false,
  })
);
app.use("/couponrouter", couponrouter);
app.use("/normalauth", normalauth);

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Main Html Page");
});

// Initialize connection once
//mongodb+srv://rahulsai143:rsns.kp143@couponsapp.zg3kl.mongodb.net/couponsapp?retryWrites=true&w=majority
mongoose.connect(
  "mongodb://127.0.0.1:27017/couponsapp",
  {
    keepAlive: true,
    socketTimeoutMS: 0,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    poolSize: 10,
  },
  (err, database) => {
    if (err) throw err;
    db = database;
    // Start the application after the database connection is ready
    app.listen(3000);
    console.log("the server is up and running");
  }
);

module.exports = db;

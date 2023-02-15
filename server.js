require('dotenv').config();
const userLib = require('./backend/lib/userLib');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/index.html");
});
app.get("/resume", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/resume.html");
});
app.get("/cssDemo", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/resumeClass.html");
});
app.get("/cards", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/cardDemo.html");
});
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
   if(err)
   {
    console.error(err);
   } 
   else
   {
    console.log("DB CONNECTED");
    //TODO : donot create a user if atleast 1 user exists in a table
    userLib.createFirstUser(function(err, res){
        if(err){
            console.error(err);
        }
        else{
            console.log(res);
        }
    });
    app.listen(port, function(){
        console.log("Server is running on http://localhost:" + port);
    });
   }
});

require('dotenv').config();
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
    app.listen(port, function(){
        console.log("Server is running on http://localhost:" + port);
    });
   }
});

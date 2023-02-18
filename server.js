require('dotenv').config();
const userLib = require('./backend/lib/userLib');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const options = {
    extensions : ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg', 'pdf'],
    index : ['index.html'],
}
app.use(express.static("public",options));
app.get("/", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/index.html");
});
app.get("/resume", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/public/resume.html");
});
app.get("/cssDemo", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/public/resumeClass.html");
});
app.get("/cards", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/public/cardDemo.html");
});
app.get("/weather", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/public/weather.html");
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
    // userLib.createFirstUser(function(err, res){
    //     if(err){
    //         console.error(err);
    //     }
    //     else{
    //         console.log(res);
    //     }
    // });
    // userLib.createUser({userName: "beingzero", yearOfGraduation: 2030},function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.updateUser(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.deleteUser("Nithya",function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getUserByFilter({userName: "Nithya"}, function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getAllUsers(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
    app.listen(port, function(){
        console.log("Server is running on http://localhost:" + port);
    });
   }
});

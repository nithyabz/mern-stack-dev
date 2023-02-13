const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
    // res.send("Hi Nithya");
    res.sendFile(__dirname + "/index.html");
});
app.listen(port, function(){
    console.log("Server is running on http://localhost:" + port);
});
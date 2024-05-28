const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000; 

require('./config');

app.listen(port,()=>{
    console.log("server running on port",port);
});

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});
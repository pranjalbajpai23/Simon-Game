const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { viewRouter } = require('./Router/viewRouter.js');

app.use(cors())

app.use(express.json());
app.use(express.static(__dirname+"/public"));
// view engine se
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"View"));

app.use("", viewRouter);

const port =5000  
app.listen(port, function () {
    console.log("server started at port 5000");
});
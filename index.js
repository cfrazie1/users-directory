const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const users = require('./data.js');

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static('public'));

app.get('/index', function(req , res){
    res.render('index', users);
});

app.listen(3000, function(){
    console.log("App is running on localhost:3000");
});

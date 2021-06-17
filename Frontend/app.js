const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));


app.set("view engine", "handlebars");

app.engine("handlebars", exphbs({
  extname:'handlebars',
  defaultLayout: 'index',
  layoutsDir:__dirname+'/views/layouts',
  partialsDir:__dirname+'/views/partials'
}));

app.get('/footer/:id',(req,res)=>{
  
})

app.get('/footer',(req,res)=>{
  res.render("footer")
})

app.get("/", (req,res)=>{
  res.render("main")
});


app.listen(3000, function () {
  console.log("Server running on port 3000");
});


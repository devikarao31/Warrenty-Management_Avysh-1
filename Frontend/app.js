const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.
app.listen(3000, function () {
  console.log("Server running on port 3000");
});

//jshint esversion:6
const port = process.env.PORT || 3000;
const express = require('express');
// const fs = require('fileSystem');
const exhbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const articles = require('./routes/articles');
const products = require('./routes/products');
// let methodOverride = require('methodOverride');


// What app will use 
app.use(bodyParser.urlencoded({
  extended: true
}));




//port server end 
app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});

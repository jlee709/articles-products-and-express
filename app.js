//jshint esversion:6

//vars
const express = require('express');
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');
const exphbs  = require('express-handlebars');
const app = express();

//myLibs
const Articles = require('./models/Articles');
const articles = new Articles();



//Routes Main 
app.get('/', (req, res) => {
  res.send('smoke test');
});


app.post('/', (req, res) => {

 let foundArticle = articles.get(id);
 res.send('this is POST');
});


app.put('/', (req, res) => {
  res.send('this is PUT');
});


app.delete('/', (req, res) => {
  res.send('this is DELETE');
});


//port server end 
app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});
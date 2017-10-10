//jshint esversion:6

const express = require('express');
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');
const exphbs  = require('express-handlebars');
const app = express();


//Routes Main 
app.get('/', (req, res) => {
  res.render('../views/partials/home.hbs');
});

app.get('/articles', (req, res) => {
  res.send('smoke test');
});


app.post('/article:id', (req, res) => {

 let foundArticle = articles.get(id);
 res.send('this is POST');
});


app.put('/article:id', (req, res) => {
  res.send('this is PUT');
});


app.delete('/article:id', (req, res) => {
  res.send('this is DELETE');
});


//port server end 
app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});
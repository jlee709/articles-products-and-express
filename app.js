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

//App uses --!!!
app.use(methodOverride('_method'));

app.engine('.hbs', exphbs({defaultLayout: 'main',
extname: '.hbs'
}));

app.set('view engine', '.hbs');



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
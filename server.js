//jshint esversion:6
const port = process.env.PORT || 3000;
const express = require('express');

// const fs = require('fileSystem');
const exhbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const articles = require('./routes/articles');
const products = require('./routes/products');
const pgp = require('pg-promise')();
const methodOverride = require('method-override');

// handle bars 

app.engine('.hbs', exhbs({defaultLaout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// What app will use 
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('_method',{ methods: ['POST', 'GET']}));
app.get('/', (req, res) =>{
  res.render('home');
});
app.use('/articles', articles);


//port server end 
app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});

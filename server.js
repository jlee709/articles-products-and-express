//jshint esversion:6


//express dependencies 
const express = require('express');
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const app = express();


//my routing files  
const articles = require('./routes/articles.js');
const products = require('./routes/products.js');
let id = 0;


//App uses --!!!
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.engine('.hbs', exphbs({defaultLayout: 'main',
extname: '.hbs'
}));

app.set('view engine', '.hbs');


//article route form main server 
app.use('/articles', articles);
app.use('/products', products);


//Route Main 
app.get('/', (req, res) => {
  res.render('../views/partials/home.hbs');
});


//port server end 
app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});








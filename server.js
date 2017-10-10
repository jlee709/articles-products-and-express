//jshint esversion:6

//express dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs  = require('express-handlebars');
const app = express();

//my routing files  
const articles = require('./routes/articles.js');
const products = require('./routes/products.js');


//App uses --!!!
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

// //port server end 
// app.listen(port, () => {
//   console.log(`server listening on: ${port}`);
// });


module.exports = app;
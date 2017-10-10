//jshint esversion:6

const express = require('express');
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');
const exphbs  = require('express-handlebars');
const app = express();
const articles = require('./routes/articles.js');



//App uses --!!!
app.use(methodOverride('_method'));

app.engine('.hbs', exphbs({defaultLayout: 'main',
extname: '.hbs'
}));

app.set('view engine', '.hbs');
//article route form main server 
app.use('/articles', articles);
// app.use('/products', products);

//Routes Main 
app.get('/', (req, res) => {
  res.render('../views/partials/home.hbs');
});


//port server end 
app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});
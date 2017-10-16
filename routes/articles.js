//jshint esversion:6

// Articles routes - required 

const express = require('express');
const router = express.Router();
const Articles = require('../routes/articles');
const app = express();


//Article routes 

app.get('/', (req, res) => {
  res.render('/', 'views/index.html');
  
});

//jshint esversion:6

// Articles routes - required 
const express = require('express');
const app = express();



//Article routes 

app.get('/', (req, res) => {
  res.render('/');
  res.send('CHecking page');
});

app.get('/main', (req, res) => {
  res.render('/main');
});
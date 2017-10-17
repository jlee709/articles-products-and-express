//jshint esversion:6

// Articles routes - required 

const express = require('express');
const router = express.Router();
const app = express();

const Articles = require('../db/articles');
const articles = new Articles();


// Article routes 
app.get('/index' , (req,res) => {
 return  articles.findAll()
 .then((articles) => {
    return res.json(articles);
 });
});



// create and post route 
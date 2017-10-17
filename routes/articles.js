//jshint esversion:6

// Articles routes - required 

const express = require('express');
const router = express.Router();

const Articles = require('../db/articles');
const articles = new Articles();


// Article routes 
router.get('/' , (req,res) => {
  articles.findAll()
 .then((articles) => {
    return res.json(articles);
 })
 .catch((errorMsg) => {
  res.json(errorMsg);
 });
});

//Article create
// router.post('/new', (req,res) => {
//   return articles.create()
//   .then((newArticle) => {
//     return res.json(newArticle);
//   });
// });

// app.put('/edit', (req,res) => {
//   return articles.update()
//   .then((newArticle) => {
//     return res.json(updateArticle);
//   });
// });

// app.delete('/Article/:id', (req,res) => {
//   return articles.delete()
//   .then((newArticle) => {
//     return splice(article.id , 1);
//   });
// });
// create and post route 


module.exports = router;
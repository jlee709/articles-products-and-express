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

// Article create

router.post('/new', (req,res) => {
  console.log(req.body);
  return articles.create(req.body)
  .then((newArticle) => {
    return res.json(newArticle);
  });
});

//UPDATE 
router.put('/edit', (req,res) => {
  return articles.update()
  .then((editArticle) => {
    return res.json(editArticle);
  }).catch((error) => {
    console.log(error, ' HELPE HELP ERROROROROR DANGER!!! IN ARTICLES> JS LINE 38 ');
  });
});

// app.delete('/Article/:id', (req,res) => {
//   return articles.delete()
//   .then((newArticle) => {
//     return splice(article.id , 1);
//   });
// });
// create and post route 


module.exports = router;
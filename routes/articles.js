//jshint esversion:6

// Articles routes - required 

const express = require('express');
const router = express.Router();

const articles = require('../db/articles');
const Articles = new articles();


// Article routes 
router.get('/' , (req,res) => {
  Articles.findAll()
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
  return Articles.create(req.body)
  .then((newArticle) => {
    return res.json(newArticle);
  });
});

//UPDATE 
router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id, 'PARAMS OF ARTICLES>JS ON LINE 35');
  Articles.find(id)
  .then((data) => {
    return res.json(data);
  });
});

router.get('/:id/edit', (req, res) =>{
  let id = req.params.id;
  console.log(id, "PARAMS OF ARTICLES>JS ON LINE 45");
  Articles.find(id)
  .then((data) => {
    return res.json(data);
  });
});

router.delete('/:id/edit', (req,res) => {
  console.log("delete ROUTE is runnning");
  let id = req.params.id;
  return Articles.delete(id)
  .then((data) => {
    return res.json(data);
  });
});

router.put('/:id/edit', (req,res) => {
  console.log('The Out Route Has Been Invoked!!!!');
  let id =req.params.id;
  let body = req.body;
  return Articles.update(id, body)
  .then((data) => {
    return res.json(data);
  }).catch((error) => {
    console.log(error, ' HELPE HELP ERROROROROR DANGER!!! IN ARTICLES> JS LINE 38 ');
  });
});




module.exports = router;
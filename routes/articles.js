//jshint esversion:6

const express = require('express');
const router = express.Router();
const Articles = require('../db/Articles');
const articles = new Articles();

router.get('/', (req, res) => {
  res.send('smoke test');
});

router.post('/:title', (req, res) => {

 let foundArticle = articles.get(id);
 res.send('this is POST');
});


router.put('/:title/edit', (req, res) => {
  res.send('this is PUT');
});


router.delete('/:title/delete', (req, res) => {
  res.send('this is DELETE');
});

module.exports = router;
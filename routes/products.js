//jshint esversion:6

const express = require('express');
const router = express.Router();
const Products = require('../db/Products');
const products = new Products();

router.get('/', (req, res) => {
  res.send('smoke test');
});

router.post('/:id', (req, res) => {

 let foundProduct = products.get(id);
 res.send('this is POST');
});


router.put('/:id', (req, res) => {
  res.send('this is PUT');
});


router.delete('/:id', (req, res) => {
  res.send('this is DELETE');
});


module.exports = router;
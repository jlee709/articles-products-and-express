//jshint esversion:6

const express = require('express');
const router = express.Router();
const Products = require('../db/Products');
const products = new Products();

router.get('/', (req, res) => {
  res.send('smoke test');
});

router.get('/new', (req, res) => {
  res.render('products/new'); //always shows perspective from view folder 
});

router.get('/update', (req, res) => {
  res.render('products/update'); //always shows perspective from view folder 
});

router.post('/', (req, res) => {
  res.send(products.createProduct(req.body.name, req.body.price));

  if(truthy){

    res.send(products.createProduct(req.body.name, req.body.price));
  }

  else{

    res.redirect('/');
  }
});

router.get('/:id/edit', (req, res) => {
  res.render('this is PUT');
});

router.put('/:id', (req, res) => {
  //update things here 
});


router.delete('/:id', (req, res) => {
  res.send('this is DELETE');
});

module.exports = router;

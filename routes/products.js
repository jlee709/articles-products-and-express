//jshint esversion:6

const express = require('express');
const router = express.Router();
const Products = require('../db/Products');
const products = new Products();

router.get('/', (req, res) => {
  res.send('smoke test');
});


router.post('/new', (req, res) => {
  res.send(products.createProduct(req.body.name, req.body.price));
  // if(truthy){
  //   res.send(products.createProduct(req.body.name, req.body.price));
  // }
  // else{
  //   res.redirect('/');
  // }
});


// router.post('/:id', (req, res) => {

//  // let foundProduct = products.get(id);
//  res.send();
// });

// router.put('/:id/edit', (req, res) => {
//   res.send('this is PUT');
// });

// router.delete('/:id/', (req, res) => {
//   res.send('this is DELETE');
// });


module.exports = router;

//jshint esversion:6

const express = require('express');
const router = express.Router();
const Products = require('../db/Products');
const products = new Products();

//smoke test 
router.get('/all', (req, res) => {
  let allProducts = collection;
  res.render('products/all',allProducts);
});

// get new products page request
router.get('/new', (req, res) => {
  let newData = {
    Name: "Name : ",
    Price: "Price : ",
    Inventory: "Inventory : "
  };
  res.render('products/new', newData); //always shows perspective from view folder 
});

// get update page 
router.get('/update', (req, res) => {
  let updateData = {
    Name: "Name : ",
    Price: "Price : ",
    Inventory: "inventory : "
  };
  res.render('products/update', updateData); //always shows perspective from view folder 
});

//posting data for create product
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

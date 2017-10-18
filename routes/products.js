// jshint esversion:6

const express = require('express');
const router = express.Router();

const products = require('../db/products');
const Products = new products();


//prodcuts routses 
router.get('/products', (req, res) => {
  console.log("smoke test");
});

// router.get('/', (req, res) =>{

// });

// router.get('/', (req, res) =>{

// });

// router.put('/', (req, res) =>{

// });

module.exports = router;
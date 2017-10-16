//jshint esversion:6

const express = require('express');
const fs = require('fileSystem');
const exhbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const articles = require('./routes/articles');
const products = require('/routes/products');
//jshint esversion:6

console.log('shes linked');

const express = require('express');
const port = process.env.PORT || 8080;
const methodOverride = require('method-override');
const app = express();


app.get('/', (req, res) => {
  res.send('smoke test');
});




app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});
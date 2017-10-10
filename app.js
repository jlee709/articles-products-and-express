//jshint esversion:6

console.log('shes linked');

const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
      res.send('smoke test');
    });




app.listen(PORT, () => {
  console.log("server listening on: ${PORT}");
});
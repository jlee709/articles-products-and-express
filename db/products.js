// jshint esversion:6

const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_and_products'
});

class Products{
  constructor(){}

  create(data){
    console.log("Create fired in class");
    let name = data.name;
    let price = data.price;
    let inventory = data.inventory;
    let query = "INSERT INTO products (name, price, inventory) VALUES ('some', 'sum', 'sum')";
    let params =  [name, price, inventory];
    console.log(query, "QUERY ON LINE 19 PRODUCTs.js");
     return db.any(query, params);
  }
}

module.exports = Products;
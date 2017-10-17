// jshint esversion:6
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_and_products',
  user: "articles_and_products_user",
});

//articles class
class Articles {
  constructor(){
  }
  create(title, body, author){
    return db.one('INSERT INTO articles VALUES($1, $2, 3$)', [title, body, author]);
  }

  find(title){
    //somethings
  }

  findAll(){
    // return allArticles
    return db.any('SELECT * FROM articles');
  }
} 
module.exports = Articles;
// careates connection to db but files run in here 
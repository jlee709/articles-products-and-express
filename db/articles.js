// jshint esversion:6
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_and_products',
  user: "articles_and_products_user",
});

class Articles {
  constructor(){

  }
  create(a,b){
    return db.one('INSERT INTO articles(title, author) VALUES($1, $2)', [a, b]);
  }
  find(title){
    //somethings
  }
  findAll(){
    // return allArticles
  }
} 

// .then(() => {
//   console.log('good to go');
// })
// .catch(error => {
//   console.log('error');
// });

function all(){
  return db.any('SELECT * FROM $1~;', ['articles'])
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log('You hit an error');
  });
}

module.exports = Articles;
// careates connection to db but files run in here 
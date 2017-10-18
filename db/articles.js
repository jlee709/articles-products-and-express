// jshint esversion:6
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_and_products'
});

//articles class
class Articles {
  constructor(){}

  create(data){
    console.log(data, " THIS IS LINE 15 FROM ARTICLES>JS");
  let title = data.title;
  let body = data.body;
  let author = data.author;
  let query = "INSERT INTO articles (title, author, content) VALUES ($1, $2, $3)";

  console.log(query, 'THIS IS THE QUERY , LINE 20 ATRICLES DB');
  let params =  [title, body, author];
  console.log(params, 'THIS IS PARAMS ON LINE 21 ARTICLE.jS');
    return db.any(query, params);
  }

//selecting from $1 where it = title
  find(id){
    let query = 'SELECT * FROM articles WHERE id = $1';
     return db.one(query, id);
  }
//get all articles
  findAll(){
    // return allArticles
    return db.any('SELECT * FROM articles'); 
  }
//update for put method 
  update(id, objBody) {

    console.log('the UPDAT FUNCTION IS RUNNING on LINE 38 in ARTICLES.JS');

    let title = objBody.title;
    let author = objBody.author;
    let content = objBody.content;
    console.log(objBody, "this is content");
    let query = "UPDATE articles SET title = $1, author = $2, content = $3 WHERE id = $4";
    let params =  [title, author, content, id];
    console.log(content, "this is content");

    return db.any(query, params)
    .catch((error) => {
      console.log(error, ' THIS IS THE ERROR MSG IN ARTICLES DB LINE 30');
    });
  }
  delete(id){
    console.log('delete METHOD operationsal');
    let query = "DELETE FROM articles WHERE id = $1";
    console.log(id, "< ----- This should be the ID");

    //needs to be in arry bcz $1 looks for arry idx
    let params = [id];
    return db.any(query, params);
  }
} 
module.exports = Articles;



// careates connection to db but files run in here 

// UPDATE <table_name>
// SET <column_1> = <value_1>, <column_2> = <value_2>
// WHERE <column_1> = <value>;
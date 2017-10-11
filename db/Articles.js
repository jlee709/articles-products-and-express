// jshint esversion:6

// **note:** The **title** property is mandatory. If no other key is present then update the `title`.

class Article {
  constructor(user, id) {
    this.user = user;
    this.id = id;
  }


  createArticle(user, id, description){
    let newArticle = {
      user: id,
      description: description
    };
    return newArticle;
  }
  
  
  updateArticle(id){
  for(let i = 0; i<_collection.length; i++){
    if(this._collection[i].id === this.id){
      console.log("update the product");
    }
  }
 }

  deleteArticle(title){
    // need to delete and redirect to the articles page *new
  }
}

module.exports = Article;

















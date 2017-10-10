// jshint esversion:6


// ## Articles Routes
// `/articles`
// - `POST` creates a new article
//   - The incoming request will look like this: `{ title: String, body: String, author: String }`
//     - from this request you will save your data as `{ title: String, body: String, author: String, urlTitle: String }`
//       - **title** is a unique identifier for this item.
//       - **urlTitle** is similar to the **title** that was passed in but instead is a URL Encoded version. *Javascript has a native way to url-encode strings*.
//         **example:** If given a title of `"The Best Magpie Developer of 2016"`, it's url-encoded equivilent is `"The%20Best%20Magpie%20Developer%20of%202016"`.
//     - If **successful** then redirect the user back to the `/articles` route.
//     - If not **successful** then send the user back to the **new** article route, `/articles/new` and some way to communicate the error back to the user via templating.

// `/articles/:title`
// - `PUT` edits a product. Finds an article in a collection with the same `title` value and updates the information.
//   - The incoming request will look like this: `{ title: String, ... }`
//     - `...` represents a field to be edited for example: if the server was sent `{ title: "The Best Magpie Developer of 2016" }` the server will find an article with a `title` property to be `"The Best Magpie Developer of 2016"`.
//     - If **successful** then redirect the user back to the `/articles/:title` route, where `:title` is the article that was just edited, so that they can see the updated resource.
//     - If not **successful** then send the user back to the **new** article route, `/article/:title/edit` and some way to communicate the error back to the user via templating.

// `/articles/:title`
// - `DELETE` removes a article by it's **title**.
//   - If **successful** then redirect the user back to the `/articles` page and some way to communicate to the user that this action was successful.
//   - If not **successful** then send the user back to the **new** article route, `/article/:id`, where `:id` is the product that was just edited and a message that this action was unsucessful.

// **note:** The **title** property is mandatory. If no other key is present then update the `title`.

class Article {
  constructor(user, id) {
    this.user = user;
    this.id = id;
  }
  get(id){
    // find obj in _collection with id === id
    for(var i = 0; i<id.length; i++){
      if(id[i] === id){
        return id;
      }
    }
    // return found obj. typeof === object 
  }post(id){
    

  }
  
  put(id){


  }

  delete(id){

  }
}

module.exports = Article;

















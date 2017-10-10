//jshint esversion:6

// ## Product Routes
// `/products`
// - `POST` creates a new product
//   - The incoming request will look like this: `{ name: String, price: String, inventory: String }`
//     - from this request you will save your data as `{ id: Number, name: String, price: Number, inventory: Number }`
//       - **id** is a unique identifier for this item. You will generate this on the server side and it will be used to access specific products with it
//     - If **successful** then redirect the user back to the `/products` route.
//     - If not **successful** then send the user back to the **new** article route, `/products/new` and some way to communicate the error back to the user via templating.

// `/products/:id`
// - `PUT` edits a product. Finds a product in a collection with the same `id` value and updates the information.
//   - The incoming request will look like this: `{ id: Number, ... }`
//     - `...` represents a field to be edited for example: if the server was sent `{ id: 12, name: "Water Bed" }` the server will find the product with an **id** of **12** and change the `name` property to be `"Water Bed"`.
//     - If **successful** then redirect the user back to the `/products/:id` route, where `:id` is the product that was just edited, so that they can see the updated resource.
//     - If not **successful** then send the user back to the **new** article route, `/products/:id/edit` and some way to communicate the error back to the user via templating.

// `/products/:id`
// - `DELETE` removes a product by it's **id**.
//   - If **successful** then redirect the user back to the `/products` page and some way to communicate to the user that this action was successful.
//   - If not **successful** then send the user back to the **new** article route, `/products/:id`, where `:id` is the product that was just edited and a message that this action was unsucessful.


class Product {
  constructor(name, id, price) {
    this.user = user;
    this.id = id;
    this.price = price;
    this._collection = [];
  }
  
get(id){
    // find obj in _collection with id === id

    // return found obj. typeof === object 

  
  }
}

module.exports = Product;









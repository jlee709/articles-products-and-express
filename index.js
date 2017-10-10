//jshint esversion:6

const http = require('http');
const app = require('./server');
const port = process.env.PORT || 16000;

http.createServer(app).listen(port, () => {
  console.log('server listening ');
});



// //port server end 
// app.listen(port, () => {
//   console.log(`server listening on: ${port}`);
// });


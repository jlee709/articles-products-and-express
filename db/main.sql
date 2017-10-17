const pgp = require('pg-promise')();

DROP TABLE articles IF EXISTS;  
DROP USER IF EXISTS;


CREATE TABLE articles(
   userId int,
   PRIMARY KEY(userId)
);

CREATE TABLE products(
   userId int,
   PRIMARY KEY(userId)
);

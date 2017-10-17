--create DB for both Articles and Products 
DROP DATABASE IF EXISTS articles_and_products;
CREATE DATABASE articles_and_products;

\c articles_and_products
-- drops if db_user exists then creates 
DROP USER IF EXISTS articles_and_products_user;
CREATE USER articles_and_products_user WITH LOGIN PASSWORD 'password';

--create tables
CREATE TABLE IF NOT EXISTS articles
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  author VARCHAR(255) NOT NULL,
  content VARCHAR(70500) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
-- making title index
CREATE INDEX IF NOT EXISTS title_idx ON articles (title);

CREATE TABLE IF NOT EXISTS products
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price MONEY NOT NULL,
  inventory INT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

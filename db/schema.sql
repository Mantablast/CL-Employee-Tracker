-- DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INTEGER NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee(
  id INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products (
 id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(45) NULL,
 price DECIMAL(10,2) NULL,
 stock_quantity INT NULL,
 PRIMARY KEY (id)
);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Shampoo", 5, 120);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Hair Spray", 4.5, 100);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Body Wash", 4.7, 90);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Eyeliner", 3.5, 150);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Mascara", 3.1, 65);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Foundation", 5, 45);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Earphones", 8, 25);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Hair Oil", 6, 72);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Detergent", 5.9, 105);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Lipstick", 16, 66);
-- Create the burger database and specify it for use.
CREATE DATABASE burgerDB;
USE burgerDB;

-- Create the burgers table.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);
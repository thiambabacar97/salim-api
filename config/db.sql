CREATE DATABASE `userDB`;
USE `userDB`;
CREATE TABLE `users` ( 
    id INT(11) AUTO_INCREMENT,
    `first_name` VARCHAR(32) NOT NULL,
    `last_name` VARCHAR(70),  
    `address` VARCHAR(70),  
    `age` INT,
    CONSTRAINT key1 PRIMARY KEY (id)
);
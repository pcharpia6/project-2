DROP DATABASE IF EXISTS dingdb;
CREATE DATABASE dingdb;


DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(32) NOT NULL,
    belt_color NOT NULL,
    PRIMARY KEY (id)
);


DROP TABLE IF EXISTS videos;
CREATE TABLE videos;


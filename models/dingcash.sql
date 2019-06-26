DROP DATABASE IF EXISTS dingbucks_db;

CREATE DATABASE dingbucks_db;

USE dingbucks_db;

CREATE TABLE dingcash(
dingcash_id INTEGER NOT NULL AUTO_INCREMENT,
dingcash_name VARCHAR (30) NOT NULL,
dingcash_ammount INT default 0,
donation BOOLEAN NOT NULL
);

CREATE TABLE dingout(
    dingout_ammount INT default 0,
    dingout_approval BOOLEAN NOT NULL
);
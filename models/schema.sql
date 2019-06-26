DROP DATABASE IF EXISTS dingdb;
CREATE DATABASE dingdb;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(32) NOT NULL,
    belt_color VARCHAR(16) NOT NULL DEFAULT "White",
    description TEXT(1000),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_role VARCHAR(32) NOT NULL DEFAULT "contributor",
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS videos;
CREATE TABLE videos(
    id INT NOT NULL AUTO_INCREMENT,
    video_name VARCHAR(64) NOT NULL,
    game_name VARCHAR(64) NOT NULL,
    user_id INT NOT NULL,
    video_type VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS coach_reviews;
CREATE TABLE coach_reviews(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    message TEXT(1000),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    video_score INT NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS contributor_reviews;
CREATE TABLE contributor_reviews(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    message TEXT(1000),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_reviews_coach;
CREATE TABLE user_reviews_coach(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    message TEXT(1000),
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
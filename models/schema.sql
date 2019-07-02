USE kzl0z69ljolzo6co;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(32) NOT NULL,
    beltColor VARCHAR(16) NOT NULL DEFAULT "White",
    description TEXT(1000),
    dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userRole VARCHAR(32) NOT NULL DEFAULT "contributor",
    dingBucks INT NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Videos;
CREATE TABLE Videos(
    id INT NOT NULL AUTO_INCREMENT,
    videoName VARCHAR(64) NOT NULL,
    gameName VARCHAR(64) NOT NULL,
    Genre VARCHAR(256) NOT NULL,
	userId INT NOT NULL,
    coachRequest BOOLEAN DEFAULT false,
    Brag BOOLEAN DEFAULT false,
    contributorFeedback BOOLEAN DEFAULT false,
    dontBeLikeMe BOOLEAN DEFAULT false,
    videoUrl VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
-- ALTER TABLE videos
-- ADD COLUMN video_url VARCHAR(256) NOT NULL;

DROP TABLE IF EXISTS coachReviews;
CREATE TABLE coachReviews(
    id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    message TEXT(1000),
    dateCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    videoScore INT NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS contributorReviews;
CREATE TABLE contributorReviews(
    id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    message TEXT(1000),
    dateCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_reviews_coach;
CREATE TABLE user_reviews_coach(
    id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    message TEXT(1000),
    dateCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
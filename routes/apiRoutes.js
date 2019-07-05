/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function(app) {
	// Create a new video
	app.post("/api/video", function(req, res) {
		db.Video.create(req.body).then(function(dbVideo) {
			res.json(dbVideo);
		});
	});

	// Create a new user
	app.post("/api/users", function(req, res) {
		db.User.create(req.body).then(function(dbUser) {
			res.json(dbUser);
		});
	});

	// Create a coach review
	app.post("/api/coach-review", function(req, res) {
		db.coachReview.create(req.body).then(function(dbCoachReview) {
			res.json(dbCoachReview);
		});
	});

	// Add dingbucks to user
	app.put("/api/ding-bucks", function(req, res) {
		db.User.update({ dingBucks: sequelize.literal("dingBucks + req.body.dingBucks") }, 
			{ where: {userName: req.body.userName} }).then(function(dbDingBucks) {
			res.json(dbDingBucks);
		});
	});

	// Create a review of coach review
	app.post("/api/contributor-response-coach-review", function(req, res) {
		db.contributorResponseCoachReview.create(req.body).then(function(dbContributorResponseCoachReview) {
			res.json(dbContributorResponseCoachReview);
		});
	});

	app.get("/api/gameName/:gameName", function(req, res) {
		db.Video.findAll({
			limit: 10,
			where: { gameName: req.params.gameName }
		}).then(function(dbGameName) {
			console.log("res.json = "+res.json(dbGameName));
			res.json(dbGameName);
		});
	});

	app.get("/api/genre/:genre", function(req, res) {
		db.Video.findAll({
			limit: 10,
			where: { Genre: req.params.genre }
		}).then(function(dbGameGenre) {
			res.json(dbGameGenre);
		});
	});
};
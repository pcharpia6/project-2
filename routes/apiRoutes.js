var db = require("../models");

module.exports = function(app) {
  // Get all examples
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

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.get("/api/gameName/:gameName", function(req, res) {
    db.Video.findAll({
      where: { gameName: req.params.gameName }
    }).then(function(dbGameName) {
      res.json(dbGameName);
    });
  });

  app.get("/api/genre/:genre", function(req, res) {
    db.Video.findAll({
      where: { Genre: req.params.genre }
    }).then(function(dbGameGenre) {
      res.json(dbGameGenre);
    });
  });
};
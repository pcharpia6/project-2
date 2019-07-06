$(document).ready(function () {

  var app = angular.module("topGames", []);
  
  app.controller("twitch", ["$scope", "$http", function ($scope, $http) {

    $scope.games;
    $scope.streamers = [];

    $http.get("https://api.twitch.tv/kraken/games/top?client_id=swheeu8yk5hiqgcgo69m58amq5ynn5").success(function (topGames) {

      $scope.games = topGames.top;
      $scope.count = 0;

      var gameQuery;
      $scope.games.forEach(function (twitchGame, index) {
        gameQuery = twitchGame.game.name.replace(/\s/g, "+");

        gameQuery = gameQuery.replace("&", "%26");

        $http.get("https://api.twitch.tv/kraken/streams?client_id=swheeu8yk5hiqgcgo69m58amq5ynn5&game=" + gameQuery).success(function (streamers) {

          $scope.streamers.push({
            game: streamers.streams[0].game,
            streams: streamers.streams.slice(0, 3)
          });

        });


      });

    });






  }]);//controller




});//document ready
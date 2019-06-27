//it takes the top games from twitch.tv using their api
//then gets the streamers of those games

$(document).ready(function () {

  var app = angular.module("topGames", []);

  app.controller("twitch", ["$scope", "$http", function ($scope, $http) {

    $scope.games;

    $http.get("https://api.twitch.tv/kraken/games/top?client_id=swheeu8yk5hiqgcgo69m58amq5ynn5").success(function (topGames) {

      $scope.games = topGames.top;
      $scope.count = 0;

      var gameQuery;
      $scope.games.forEach(function (twitchGame, index) {
        gameQuery = twitchGame.game.name.replace(/\s/g, "+");

        gameQuery = gameQuery.replace("&", "%26");

        $http.get("https://api.twitch.tv/kraken/streams?client_id=&=" + gameQuery).success(function (games) {

          $scope.games.push();

        });


      });

    });


  }]);

});
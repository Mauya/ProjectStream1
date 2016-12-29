angular.module('RouteControllers', [])
app.controller('MusicController', ['$scope', 'audioService', function($scope, audioService) {
    $scope.name = audioService.audioPlayer;
    $scope.update = function(){
      $scope.name.isPaused;
    }
}]);
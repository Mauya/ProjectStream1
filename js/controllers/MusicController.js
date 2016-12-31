angular.module('RouteControllers', [])
app.controller('MusicController', ['$scope', 'audiofactory', function($scope, audiofactory) {
    $scope.name = audioService.audioPlayer;
    $scope.update = function(){
      $scope.name.isPaused;
      $scope.audioList=Audio;
    }
}])

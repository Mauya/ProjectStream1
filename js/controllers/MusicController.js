angular.module('RouteControllers', [])
app.controller('MusicController', ['$scope', 'audiofactory', 'audioService', function($scope, audioService, audiofactory) {
	$scope.musicTitle='The Crew Music' //can list as much of their music as they want.
    $scope.name = audioService.audioPlayer;
    $scope.update = function(){
      $scope.name.isPaused;
      $scope.audioList=Audio;
    }
}]);

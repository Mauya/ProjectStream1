angular.module('RouteControllers', [])
app.controller('MusicController', ['$scope', 'audiofactory', 'audioService', function($scope, audioService, audiofactory) {
	$scope.musicTitle='The Crew Music' //can list as much of their music as they want.
    $scope.audio = audioService.audioPlayer;
    $scope.update = function(){
      $scope.audio.isPaused;
      $scope.audioList=Audio;
    }
}]);

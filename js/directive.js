//directive for placing the player on our page and allowing user interaction
angular.module('bandApp').directive('audioPlayer', function(audioService) {
  return {
        restrict: 'E',
        scope: {},
        templateUrl: 'templates/music.html',
        link: function (scope, element, attrs) {
        	scope.myAudioService = audioService;
      }
    };
});
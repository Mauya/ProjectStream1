 angular.module('RouteControllers', [])
 app.controller("GalleryController", function($Scope){

    var media = [
    {
    title:"Media",
      gallery:[
        {Audio:"Music"},
        {Visual:"Video"},
        {Pict:"Photos"}
    ]
}]
  $scope.media=media;
})

app.controller('MusicController', ['$scope', 'audioService', function($scope, audioService) {
    $scope.name = audioService.audioPlayer;
    $scope.update = function(){
      $scope.name.isPaused;
    }
}]);
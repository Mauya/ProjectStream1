angular.module('RouteControllers', []);
app.controller('VideoController',
        ['$scope', function($scope) {
        $scope.videoSrc =[
            {"video/Parov Stelar-Booty Swing.mp4"},
            {"video/pikachu-dance.make4fun.com.5223f.mp4"}
        ],
        $scope.$on('$viewContentLoaded', function () {
        
        $scope.myPlayer.play();
    });
}]);



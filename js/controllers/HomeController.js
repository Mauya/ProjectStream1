angular.module('RouteControllers', [])
app.controller('HomeController', ['$scope', function($scope) {
  $scope.title = "Swing Crew Events!";
  $scope.title1 = "This is Our Music Welcome";
  $scope.myInterval = 5000;
  $scope.noWrapSlides=false;
  $scope.active = 0;
  $scope.slides= [
    {
      image: '/images/swing1.jpg',
      id: 0,
      caption: 'Social1'
    },
    {
      image: '/images/swing2.jpg',
      id: 1,
      caption: 'Social2'
    },
    {
      image: '/images/swing3.jpg',
      id:2,
      caption: 'Social3'
    },
    {
      image: '/images/swing4.jpg',
      id:3,
      caption: 'Hotelfunction4'
    },
    {
      image: '/images/swing5.jpg',
      id: 4,
      caption: 'Hotelfunction5'
    },
    {
      image: '/images/swing6.jpg',
      id: 5,
      caption: 'Weddingfunction6'
    }
  ];
}]);
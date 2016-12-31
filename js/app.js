var app = angular.module('bandApp',
 ['ngRoute',
 'RouteControllers', 
 'ngAnimate', 
 'ngTouch', 
 'ui.bootstrap',
 'audioService',
 'jkuri.gallery',
 'ngSanitize',
 'com.2fdevs.videogular',
 'com.2fdevs.videogular.plugins.controls',
 'com.2fdevs.videogular.plugins.overlayplay',
 'com.2fdevs.videogular.plugins.poster'
 ]);

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })    
    .when('/booking', {
        templateUrl: 'templates/booking.html',
        controller: 'BookingController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    })
    .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController'
    })
    .when('/music', {
        templateUrl: 'templates/music.html',
        controller: 'MusicController'
    })
    .when('/video', {
        templateUrl: 'templates/video.html',
        controller: 'VideoController'
    })
    .when('/photo', {
        templateUrl: 'templates/photo.html',
        controller: 'PhotoController'
    })    
    .otherwise({
        redirectTo: '/'
    })
    $locationProvider.html5Mode(true);    
}]);


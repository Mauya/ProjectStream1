angular.module('RouteControllers', [])
app.controller('PhotoController', function($scope, $document) {
    var self = this;
    self.images = [
      {image: 'images/photo1.jpg'},
      {image: 'images/photo2.jpg'}
    ];
  });
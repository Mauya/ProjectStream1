angular.module('RouteControllers', [])
app.controller("ContactController", function($scope){
  var contact = {
    address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
    email:"symphonycrew@sc.ie",
    telephone: "xx xxx xxxx"
  };
  $scope.contact=contact;
});

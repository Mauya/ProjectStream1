app.controller('BookingController', function($scope){
  $scope.bookigTitle='For Special Events Make a Booking Here!';
  $scope.booking.name = 'Name';
  $scope.booking.email = 'Email';
  $scope.booking.phone = 'phone';
  $scope.booking.date = 'date';
  $scope.booking.message = 'message';

  $scope.submitForm = function () {
    console.info("Here I should implement the logic to send a request to the server.");
  }
});
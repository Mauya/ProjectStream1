angular.module("RouteControllers", []);
app.controller("BookingController", ["$scope", function($scope){
	var type = this;
    type.events = ['wedding', 'Hotel functions', 'Corporate functions', 'Other events'];
      $scope.booking = {};
      // watch for a change in the totalDays
      $scope.$watchGroup(['booking.totalDays'], function(value) {
        total();
      });

      // send data to action.php on submit
      $scope.handleFormSubmit = function(booking) {

        /*----
        Un comment the following lines to enable action.php script
        ----*/
        // $http.post('action.php', booking).success(function (data, status) {
        //     if (data.success) {
        //         $window.alert("Thank you! Your message has been sent.");
        //         $scope.booking = {};

        //         // display success message
        //         $scope.$parent.message = true;
        //     }			
        // }).error(function (data, status) {
        //     $window.alert("Sorry, there was a problem!");
        // });

        /*----
			Remove the following 2 lines of code if you are enabling action.php script
			----*/
        $scope.booking = {};
        $scope.$parent.message = true;


      };


      this.selectEvent = function(setEvent) {
        if (!setEvent.active) {
          angular.forEach(this.events, function(s) {
            s.active = false;
          });
          setEvent.active = true;
        }

        total();
      };

      var me = this;

      var total = function() {

        var total = 0;
        var percentage = 0;
        var eventType;
        var discount = false;

        total = $scope.booking.totalDays;

        angular.forEach(me.events, function(s) {
          if (s.active) {
            total *= s.price;
            eventType = s.name + ' - ' + s.description;
          }

        });
        if ($scope.booking.totalDays >= 10) {
          percentage = (total / 100) * 10;
          total -= percentage;
          discount = true;
        }

        $scope.booking.total = total;
        $scope.booking.percentage = percentage;
        $scope.booking.eventType = eventType;
        $scope.booking.discount = discount;
      };

      // Datepicker

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened1 = true;
        $scope.opened2 = false;
      };

      $scope.open2 = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened1 = false;
        $scope.opened2 = true;
      };

      $scope.clear = function() {
        $scope.dt = null;
        $scope.dt2 = null;
      };

      $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];

    }
  ]);

//   app.controller('PanelController', function() {
//     this.tab = 1;

//     this.selectTab = function(setTab) {
//       this.tab = setTab;
//       if (setTab === 2) {
//         $scope.message = false;
//       }
//     };

//     this.isSelected = function(checkTab) {
//       return this.tab == checkTab;

//     };
//   });
// })();

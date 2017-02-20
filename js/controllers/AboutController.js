angular.module('RouteControllers', [])
app.controller('AboutController', ['$scope', '$route', function($scope, $route){
  var vm =this;
    vm.reloadData=function(){
      $route.reload();
    }
    $scope.memberTitle= "The Biography of Band Members";
    $scope.members=[
    {
      "name":"member one",
      "image":"images/member1.jpg",
      "description":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },

    {
      "name":"member Two",
      "image":"images/member2.jpg",
      "description":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },

    {
      "name":"member Three",
      "image":"images/member3.jpg",
      "description":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },
    
    {
      "name":"member Four",
      "image":"images/member4.jpg",
      "description":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },

    {
     "name":"member Five",
      "image":"images/member5.jpg",
      "description":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate." 
    }
  ];
}]);

  
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


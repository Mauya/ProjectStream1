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

app.controller('MusicController', ['$scope', 'audiofactory', function($scope, audiofactory) {
    $scope.name = audioService.audioPlayer;
    $scope.update = function(){
      $scope.name.isPaused;
      $scope.audioList=Audio;
    }
}])

app.controller('VideoController',
    ["$sce", function ($sce) {
      this.config = {
        sources: [
          {src: $sce.video ("video/parov Stelar-Booty Swing.mp4"), type: "video/mp4"},
          {src: $sce.video ("video/pikachu-dance.make4fun.com.5223f.mp4"), type: "video/mp4"},
        
        ],
        //tracks: [
          //{
           // src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
            //kind: "subtitles",
            //srclang: "en",
            //label: "English",
            //default: ""
          //}
        //],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
          poster: "images/videogular.jpg"
        }
      };
    }]
  )
app.controller('PhotoController', function($scope, $document) {
    var self = this;
    self.images = [
      {image: 'images/photo1.jpg'},
      {image: 'images/photo2.jpg'}
    ];
  });
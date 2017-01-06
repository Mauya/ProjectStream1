angular.module('RouteControllers', []);
app.controller('VideoController',
        ["$sce", function ($sce) {
            var controller = this;
            controller.API = null;

            controller.onPlayerReady = function(API) {
                controller.API = API;
            };

            controller.videos = 
            {
                sources: [
                    {src: $sce.video ("video/parov Stelar-Booty Swing.mp4"), type: "video/mp4"},
                    {src: $sce.video ("video/pikachu-dance.make4fun.com.5223f.mp4"), type: "video/mp4"},
                ]
            },

            controller.config = {
                preload: "none",
                autoHide: false,
                autoHideTime: 3000,
                autoPlay: false,
                sources: controller.videos[0].sources,
                theme: {
                    url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
                },
                plugins: {
                    poster: "http://www.videogular.com/assets/images/videogular.png"
                }
            };

            controller.setVideo = function(index) {
                controller.API.stop();
                controller.config.sources = controller.videos[index].sources;
            };
        }]
    );  
/*angular.module('RouteControllers', [])
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
  );*/

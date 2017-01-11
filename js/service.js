app.service('audioService', function(){

})
//service enable our player to play.
angular.module("bandApp").service("audioService", function (AudioFactory) {
	var mediaPlayer = {
		isPaused: true,
		//few sample tracks, these are to be replaced by band music files.
		audioList: [{
			Audio:"/static/26886.mp3",
		},
		{
			Audio:"/static/minion-xmas.make4fun.com.24eb4.mp3",
		}
		],
		//set source of the audio player to the current track.
	currentIndex: 0,
	     
	    play: function () {
	       mediaPlayer.isPaused = false;
	       AudioFactory.src = mediaPlayer.audioList[mediaPlayer.currentIndex];
	       AudioFactory.play();
	    },
	     
	    pause: function () {
	        mediaPlayer.isPaused = !mediaPlayer.isPaused;
	        if (mediaPlayer.isPaused) {
	            AudioFactory.pause();
	        } else {
	            AudioFactory.play();
	        }
	    },

	    previous: function () {
            if (mediaPlayer.currentIndex > 0) {
                mediaPlayer.currentIndex--;
                mediaPlayer.play();
            }
          },
 
		next: function () {
            if (mediaPlayer.currentIndex < mediaPlayer.audioList.length) {
                mediaPlayer.currentIndex++;
                mediaPlayer.play();
            }
          }
	  };
	   
	  return mediaPlayer;
	});

angular.module('bandApp').factory('AudioFactory', function($document) {
  var audio = $document[0].createElement('audio');
  return audio;
});


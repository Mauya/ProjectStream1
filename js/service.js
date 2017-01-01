app.service('audioService', function(){
	
})
//service enable our player to play.
angular.module("bandApp").service("audioService", function (AudioFactory) {
	var audioPlayer = {
		isPaused: true,
		//few sample tracks, these are to be replaced by band music files.
		audioList: [{
			Audio:"music/26886.mp3",
		},
		{
			Audio:"music/minion-xmas.make4fun.com.24eb4.mp3"
		}
		],
		//set source of the audio player to the current track.
	currentIndex: 0,
	     
	    play: function () {
	       audioPlayer.isPaused = false;
	       AudioFactory.src = audioPlayer.audioList[myPlayer.currentIndex];
	       AudioFactory.play();
	    },
	     
	    pause: function () {
	        audioPlayer.isPaused = !audioPlayer.isPaused;
	        if (audioPlayer.isPaused) {
	            AudioFactory.pause();
	        } else {
	            AudioFactory.play();
	        }
	    },

	    previous: function () {
            if (audioPlayer.currentIndex > 0) {
                audioPlayer.currentIndex--;
                audioPlayer.play();
            }
          },
 
		next: function () {
            if (audioPlayer.currentIndex < audioPlayer.audioList.length) {
                audioPlayer.currentIndex++;
                audioPlayer.play();
            }
          }
	  };
	   
	  return audioPlayer;
	});

angular.module('bandApp').factory('AudioFactory', function($document) {
  var audio = $document[0].createElement('audio');
  return audio;
});


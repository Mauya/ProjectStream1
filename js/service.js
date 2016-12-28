//service enable our palyer to actually play. service return and object.
bandApp.service("audioService", function (audiofactory) {
	var audioPlayer = {
		isPaused: true,
		//few sample tracks, there are to be replaced by band music files.
		audioList: [{
			Audio:"music/26886.mp3",
			id: 0
		},
		{
			Audio:"music/minion-xmas.make4fun.com.24eb4.mp3"
		}		
		],
		//set source of the audio player to the current track.
	currentIndex: 0,
	     
	    play: function () {
	       myPlayer.isPaused = false;
	       AudioFactory.src = myPlayer.trackList[myPlayer.currentIndex];
	       AudioFactory.play();
	    },
	     
	    pause: function () {
	        myPlayer.isPaused = !myPlayer.isPaused;
	        if (myPlayer.isPaused) {
	            AudioFactory.pause();
	        } else {
	            AudioFactory.play();
	        }
	    },
	  };
	   
	  return myPlayer;
	});

angular.module("bandApp").factory("AudioFactory", function($document) {
  var audio = $document[0].createElement("audio");
  return audio;
});


//directive for placing the player on our page and allowing user interaction
angular.module('bandApp', [])
app.directive('mediaPlayer', function(audioService) {
  return {
        restrict: 'E',
        scope: {},
        templateUrl: '/templates/music.html',
        link: function (scope, element, attrs) {
        	scope.myAudioService = audioservice;
      }
    };
})

app.directive('mediaPlayer',
function () {
	return {
		restrict: 'A',
		scope: false,
		videoUrl: 'templates/video.html',
		link: function (scope, element, attr) {
			
			var elem = element[0];
			if (elem.tagName !== 'AUDIO' && elem.tagName !== 'VIDEO') {
				return new Error('This directive only works with video or audio elements.');
			}
			
			var Player = function (el) {
				var that = this;
				this.setSrc = function(src) {
					el.src= src;
					el.play();
				};
				this.play = function () {
					el.play();
				};
				
				this.pause = function () {
					el.pause();
				};
				
				this.reset = function () {
					el.currentTime = 0;
				};
				
				this.seek = function (seconds) {
					el.currentTime += seconds;
				};
				
				this.duration = 0;
				el.addEventListener('loadedmetadata', function () {
					scope.$apply(function () {
						that.duration = el.duration;
					});
				});
				
				this.currentTime = 0;
				el.addEventListener('timeupdate', function () {
					scope.$apply(function () {
						that.currentTime = el.currentTime;
					});
				}, false);
				el.addEventListener('seeking', function () {
					scope.$apply(function () {
						that.currentTime = el.currentTime;
					});
				}, false);
				
				
				this.isWaiting = true;
				this.isPaused = false;
				el.addEventListener('waiting', function () {
					scope.$apply(function () {
						that.isWaiting = true;
					});
				}, false);
				el.addEventListener('pause', function () {
					scope.$apply(function () {
						that.isPaused = true;
					});
				}, false);
				el.addEventListener('playing', function () {
					scope.$apply(function () {
						that.isPaused = false;
						that.isWaiting = false;
					});
				}, false);
				
				this.setVideoEndEvent = function (func) {
					el.onended = func;
				};
			}
			
			var playerName = attr.mediaPlayer;
			
			if (playerName !== undefined) {
				scope[playerName] = new Player(elem);
			}
		}
	}
});

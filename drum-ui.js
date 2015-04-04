var firstScript = document.getElementsByTagName('script')[0];
var drums = {
	s:  document.getElementById('s'),
	k:  document.getElementById('k'),
	c:  document.getElementById('c'),
	hh: document.getElementById('hh')
};
var drumSounds = {
	s:  new Audio('sounds/snare.wav'),
	k:  new Audio('sounds/kick.wav'),
	c:  new Audio('sounds/crash.wav'),
	hh: new Audio('sounds/highhat.wav')
};

var hitDrum = function(topic, data){
	drums[data].click();
}

var subscriber = pubsub.subscribe('hitDrum', hitDrum);

var playDrumSound = function(){
	var drum = event.target.id;
	drumSounds[drum].play();
}

var animate = function(){
	$(event.target).removeClass().addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(event.target).removeClass();
	});
}

for (var drum in drums) {
	var drum = drums[drum].id;
	drums[drum].addEventListener('click', function(){
		playDrumSound();
		animate();
	});
};

var drumControls = document.getElementById('drum-controls');


$(window).resize(function() {

	$(drumControls).css({
		position: 'absolute',
		left: ($(window).width() - $(drumControls).outerWidth()) / 2,
		top: ($(window).height() - $(drumControls).outerHeight()) / 2
	});

});
$(window).resize();

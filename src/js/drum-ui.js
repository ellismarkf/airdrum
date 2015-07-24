var firstScript = document.getElementsByTagName('script')[0];
var drums = {
	s:  document.getElementById('s'),
	k:  document.getElementById('k'),
	c:  document.getElementById('c'),
	hh: document.getElementById('hh')
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

//Optional Keyboard Controls
document.addEventListener('keypress', function(event) {
    if (event.keyCode == 115) {
       pubsub.publish('hitDrum', 's')
    }

   	if (event.keyCode == 98) {
       pubsub.publish('hitDrum', 'k')
    }

    if (event.keyCode == 104) {
        pubsub.publish('hitDrum', 'hh')
    }

    if (event.keyCode == 99) {
        pubsub.publish('hitDrum', 'c')
    }

}, true);

var drumControls = document.getElementById('drum-controls');


$(window).resize(function() {

	$(drumControls).css({
		position: 'absolute',
		left: ($(window).width() - $(drumControls).outerWidth()) / 2,
		top: ($(window).height() - $(drumControls).outerHeight()) / 2
	});

});
$(window).resize();

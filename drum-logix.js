var snare = Myo.create();
var kick = Myo.create(1);



snare.on('fist', function(edge){
    //Edge is true if it's the start of the pose, false if it's the end of the pose
    if(edge){
        snare.zeroOrientation();
    }
});


snare.on('imu', function(data){

	if( (Math.abs(data.accelerometer.y)> 1.9) && Math.abs(data.accelerometer.y)<5.1 ){

		pubsub.publish('hitDrum', 's');

	
	  }
});


kick.on('imu', function(data){

 	if(data.accelerometer.y > 1.2){

    	pubsub.publish('hitDrum', 'k')
        
    }
});

function myFunction(snareval) {
    var snareval = document.getElementById("SnareChar").value;
    var kickval = document.getElementById("KickChar").value;
    var snarekey = snareval.keyCode;
    //document.getElementById("demo").innerHTML = snareval;
    alert(snareval.keyCode)
}







//Optional Keyboard Controls
document.addEventListener('keypress', function(event) {
    if (event.keyCode == 115) {
       pubsub.publish('hitDrum', 's')
    }
   
   	else if (event.keyCode == 98) {
       pubsub.publish('hitDrum', 'k')
    }

    else if (event.keyCode == 104) {
        pubsub.publish('hitDrum', 'hh')
    }

    else if (event.keyCode == 99) {
        pubsub.publish('hitDrum', 'c')
    }

}, true);



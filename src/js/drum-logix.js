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
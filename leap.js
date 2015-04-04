var controllerOptions = {enableGestures: true};
var flag=true;
Leap.loop(controllerOptions, function(frame) {

var handString = "";
if (frame.hands.length > 0) {
  for (var i = 0; i < 1; i++) {
    var hand = frame.hands[i];

    handString += "Direction: " + (hand.direction.toString()) + "<br />";
    handString += "Palm position: " + (hand.palmPosition[1]) + " mm<br />";
	if(hand.palmPosition[1]<250 && hand.palmVelocity[1]<-500 && flag)
	{
		if(hand.palmPosition[0]<0) {
			pubsub.publish('hitDrum', 'hh');
		}
		else if(hand.palmPosition[0]>0) {
			pubsub.publish('hitDrum', 'c');
		}
		flag=false;
	}
	else if(hand.palmPosition[1]>250 && !flag)
	{
		flag=true;	
	}   
  }
}
});
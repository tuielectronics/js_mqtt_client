var mqttTopicPublish="";
var mqttTopicSubscribe="";
var options = {
            clientId: "robot_"+String(Math.random() * 10000),
            connectTimeout: 5000,
			username:'carl',
			password:'1234'
        };

var client = mqtt.connect('ws://tuielectronics.com:1885',options);
client.on('connect', function () {
	console.log("MQTT connected")
  //client.subscribe('to/classroom/QHGQJN/positions_update');
  //client.publish('presence', 'Hello mqtt');
  
})


client.on('message', function (topic, message) {
  // message is Buffer
	console.log(message.toString());
	
})

client.on('error', function (error) {
  // message is Buffer
  
  console.log(error.toString());
})
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        //console.error("Not a valid JSON")
        return false;
    }
    //console.log("Valid JSON")
    return true;
}
function publish(){
	client.publish('presence', 'Hello mqtt');
}

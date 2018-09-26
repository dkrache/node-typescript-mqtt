import * as mqtt from 'mqtt';
var client  = mqtt.connect('mqtt://test.mosquitto.org');


client.on('connect', function () {
    client.subscribe('yrojd', function (err) {
        if (!err) {
            client.publish('yrojd', "Welcome on the topic : yrojd");
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
})
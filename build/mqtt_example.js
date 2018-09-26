"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://test.mosquitto.org');
client.on('connect', function () {
    client.subscribe('djory', function (err) {
        if (!err) {
            client.publish('djory', "Hello you");
        }
    });
});
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
});
//# sourceMappingURL=mqtt_example.js.map
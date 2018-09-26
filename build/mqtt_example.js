"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://test.mosquitto.org');
class Person {
    constructor(name, age, birthday) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
let mike = new Person("Mike", 29, new Date(2019, 8, 14));
client.on('connect', function () {
    client.subscribe('djory', function (err) {
        if (!err) {
            client.publish('djory', mike.toJson());
        }
    });
});
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    client.end();
});
//# sourceMappingURL=mqtt_example.js.map
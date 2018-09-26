"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt = require("mqtt");
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
var client = mqtt.connect('mqtt://test.mosquitto.org');
client.publish("djory", mike.toJson(), undefined, () => { client.end(); });
//# sourceMappingURL=publisher.js.map
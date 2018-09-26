import * as mqtt from 'mqtt';
var client  = mqtt.connect('mqtt://test.mosquitto.org');

class Person {

    constructor(public name:String, public age:number, public birthday: Date) {
    }

    public toJson() {
        return JSON.stringify(this);
    }
}

let mike = new Person("Mike", 29, new Date(2019,8,14));

client.on('connect', function () {
    client.subscribe('djory', function (err) {
        if (!err) {
            client.publish('djory', mike.toJson());
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    client.end();
})
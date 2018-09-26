import * as mqtt from "mqtt";

class Person {
    constructor(public name:String, public age:number, public birthday: Date) {
    }

    public toJson() {
        return JSON.stringify(this);
    }
}

let mike = new Person("Mike", 29, new Date(2019,8,14));
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.publish("yrojd", mike.toJson(), undefined, ()=>{client.end()});

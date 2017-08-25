class Vehicle {
    constructor() {
	this.passengers = [];
	console.log("Vehicle created");
    }
    addPassenger(p) {
	this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
	super();
	console.log("Car created");
    }
    deployAirbags() {
	console.log("BWOOSH!");
    }
}

class Motorcycle extends Vehicle{}
const c = new Car();
const m = new Motorcycle();
c instanceof Car;		// true
c instanceof Vehicle;		// true
m instanceof Car;		// false
m instanceof Motorcycle;	// true
m instanceof Vehicle;		// true

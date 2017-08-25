class InsurancePolicy {}
function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.isInsured = function() { return !!this.insurancePolicy; }
}


class Car {}
makeInsurable(Car);

const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());  // error

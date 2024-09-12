var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastname, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastname;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger = new Passenger("Jhon", "Reis", 123);
passenger.display();
var passenger = new Passenger("Liizz", "bReis", 31123);
passenger.display();


for (var item in passenger) {
    console.log(item);
    console.log(passenger[item]);
}

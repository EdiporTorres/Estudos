interface Exterior {
    color:String
    NumofDoors:number;

}

interface interior{
    seats:number;
    auto:boolean;
}
interface Car extends Exterior, interior{
    Make:String;
    Model:String;
    Year:number;
}

var myCar: Car = {
    Make: "Ford",
    Model: "Mustang",
    Year: 1969,
    color: "Red",
    NumofDoors: 4,
    seats: 4,
    auto: true

}

console.log(myCar);
class Passenger{
    firstName:String;
    lastName:string;
    frequentFlyerNo:number;

    constructor(firstName:string, lastname:string, frequentFlyerNo:number){
        this.firstName = firstName;
        this.lastName = lastname;
        this.frequentFlyerNo = frequentFlyerNo;
       
        }
        display(){
            console.log(this.firstName+" "+this.lastName+" "+this.frequentFlyerNo);

}
}
var passenger = new Passenger("Jhon", "Reis", 123);
passenger.display();
var passenger = new Passenger("Liizz", "bReis", 31123);
passenger.display();




for(let item in passenger){
    if (passenger[item] instanceof Function){
        continue;

}else{
    console.log(item);
    console.log(passenger[item]);
}
}

class BMW{
    make:string
    model:string
    year:string

    constructor(make:string, model:string, year:string){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    commonEngenigeFunc(){
        console.log("Common Engine Functionality");

}

start(){
    console.log("BMW Started");

}	

stop(){
    console.log("BMW Stopped");

}
}


class ThreeSeries extends BMW{
    cruiseControlEnabled:boolean

    constructor(make:string, model:string, year:string, cruiseControlEnabled:boolean){
    super(make, model, year);
    this.cruiseControlEnabled = cruiseControlEnabled;
        
    }   
 }


class FiveSeries extends BMW{
    parkingAssistEnabled:boolean
    }


    var threeSeries = new ThreeSeries("BMW", "Three Series", "2018", true);
    console.log(threeSeries.cruiseControlEnabled);
    console.log(threeSeries.make);
    console.log(threeSeries.model);
    console.log(threeSeries.year);
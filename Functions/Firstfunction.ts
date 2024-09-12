import { Subtract } from "@phosphor-icons/react";

function hello(name:string):string{
    return 'Hello World'+ name;
}

console.log (hello(" Édipo"))


//function add(num1:number, num2:number):number{
   // return num1 + num2;
//}

//console.log("soma é " +add(2,5))


function display(id:number, name:string, role?:string):any{
    console.log("id: ", id);
    console.log("name", name);
    if (role != undefined){
    console.log("role", role);
    }
}

display(1, "Édipo");


function calculator():any{
    function subtract(num1:number, num2:number):number{
        return num1 - num2;
    }


return subtract;
}

var sub = calculator();
console.log(sub(10,5));

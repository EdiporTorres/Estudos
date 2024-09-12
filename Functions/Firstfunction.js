"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@phosphor-icons/react");
function hello(name) {
    return 'Hello World' + name;
}
console.log(hello(" Édipo"));
//function add(num1:number, num2:number):number{
// return num1 + num2;
//}
//console.log("soma é " +add(2,5))
function display(id, name, role) {
    console.log("id: ", id);
    console.log("name", name);
    if (role != undefined) {
        console.log("role", role);
    }
}
display(1, "Édipo");
function calculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return react_1.Subtract;
}
var sub = calculator();
console.log(sub(10, 5));

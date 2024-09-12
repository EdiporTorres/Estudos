var hello = (name:string):String =>{
    return "Hello" + name;
}

console.log(hello(" Édipo"));



var mult= (num1:number, num2:number):number =>{ 
    return num1 * num2;
}

console.log(mult(2,5))


var myarray:Array<any> = [];

for (var i = 0; i < 10; i++){
    myarray.push(():number => {return i;});
    console.log(myarray[0]());
}


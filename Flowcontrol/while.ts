
var y = 100
for (let x = 0; x <= y; x++){
    if (x % 2 == 0){
        console.log('Fizz');
    }else if (x % 5 == 0 && x % 3 == 0){
        console.log('FizzBuzz');
        
    }else if (x % 3 == 0){
        console.log('Buzz');
        
}else{
    console.log(x);
}
}
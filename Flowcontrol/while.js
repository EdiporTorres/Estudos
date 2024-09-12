var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
var y = 100;
for (var x = 0; x <= y; x++) {
    if (x % 2 == 0) {
        console.log('Fizz');
    }
    else if (x % 5 == 0 && x % 3 == 0) {
        console.log('FizzBuzz');
    }
    else if (x % 3 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(x);
    }
}

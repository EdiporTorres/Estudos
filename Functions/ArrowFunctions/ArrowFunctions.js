var hello = function (name) {
    return "Hello" + name;
};
console.log(hello(" Édipo"));
var mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 5));
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
console.log(myarray[0]());

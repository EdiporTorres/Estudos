var product = function (...nums) {
    var result = 1;
    
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

console.log (product(2,3,4,5,6));
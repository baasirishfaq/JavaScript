let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = nums.filter(isEven);

function isEven(nums){
return nums % 2 === 0;
}

console.log(evens);
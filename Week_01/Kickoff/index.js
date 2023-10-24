let nums = [1, 2, 3, 4, 5];

// Imperative approach
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// Declarative approach using JavaScript's built-in higher order array methods.
// function printNum(number) {
//   console.log(number);
// }
// nums.forEach(printNum);

nums.forEach((number) => console.log(number));

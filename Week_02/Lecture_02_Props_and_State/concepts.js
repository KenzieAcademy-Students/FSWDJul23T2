// Let's say we create a function that accepts a parameter
function someFunction(param) {
  console.log(param);
}

// Internally, we may have decided that the param should be a number.

// But what happens if we call the function without passing any arguments in?
// someFunction(10);

// Let's declare a variable, x
let x = 10;

// And create a function called modifyX that accepts 2 parameters:
// - x - the value to modify
// - y - the value to add to x
// and returns the new modified value.
function modifyX(x, y) {
  x = x + y;
  return x;
}

console.log("Original value of x:", x);
let result = modifyX(x, 3);
console.log("Result of function call:", result);
console.log("New value of x after function call:", x);

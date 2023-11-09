function doMath(x, y, calculate) {
  const result = calculate(x, y);

  return result;
}

function add(x, y) {
  return x + y;
}

// When `calculate` is called on line 2 from the below function call,
// the `add` function is actually the function being run.
let sum = doMath(5, 10, add);

let obj = {
  x: 10,
};

obj.x += 5;

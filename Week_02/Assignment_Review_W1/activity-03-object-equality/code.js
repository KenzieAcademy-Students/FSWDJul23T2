// Object Equality Katas

// All of these functions should be PURE and have NO SIDE EFFECTS.
// Do not modify any of the input objects
// Always create a new array or object when returning
// For all functions, find instructions on MyKenzie.

// There are unit tests in `tests.js`.  These tests will automatically run in the console.

const isTheSameObject = function (a, b) {
  return a === b;
};

const isTheSameObjectShallow = function (a, b) {
  // Are they the same object?
  if (a === b) return false;
  // Do they have the same # of properties?
  const keysA = Object.keys(a);
  // const keysB = Object.keys(b);
  if (keysA.length !== Object.keys(b).length) return false;

  // Check if the value of each key from a is equal to
  // the value of that same key from b
  // for (let key of keysA) {
  //   if (a[key] !== b[key]) return false;
  // }

  // return true;

  // Slightly more readable
  return keysA.every((key) => a[key] === b[key]);
};

const haveSameStructure = function (a, b) {
  const keysA = Object.keys(a);
  if (keysA.length !== Object.keys(b).length) return false;

  return keysA.every((key) => b.hasOwnProperty(key));
};

const createShallowCopy = function (object) {
  return { ...object };
};

const combineArrays = function (arrayOne, arrayTwo) {
  return [...arrayOne, ...arrayTwo];
};

const combineObjects = function (objectOne, objectTwo) {
  return { ...objectOne, ...objectTwo };
};

const copyObjectAndAddProperty = function (object, property, value) {
  return { ...object, [property]: value };
};

// STRETCH GOALS

const isTheSameObjectDeep = function (a, b) {
  // Your Code Here!
  return false;
};

export {
  combineArrays,
  combineObjects,
  copyObjectAndAddProperty,
  createShallowCopy,
  haveSameStructure,
  isTheSameObject,
  isTheSameObjectDeep,
  isTheSameObjectShallow,
};

/**
 * Higher Order Functions
 * - function that takes a callback function as an argument.
 *
 * Example: Event listener added to DOM element
 */
const button = document.getElementById("clickMePlease");

// function alertWhenClicked() {
//   alert("Thanks for clicking me.");
// }

/**
 * The .addEventListener() method is an example of a
 * higher order function because it accepts alertWhenClicked
 * as a callback function
 */
// button.addEventListener("click", alertWhenClicked);

/**
 * When using higher order functions, it is crucial
 * to not call the function when passing it in as
 * a callback.
 *
 * Often times, when we use higher order functions,
 * we like to use anonymous functions as callbacks.
 */
button.addEventListener("click", () => alert("Thanks for clicking me."));

/**
 * As we start to introduce React, we will continuously
 * see how imperative code hampers our ability to write
 * clean readable React code. React relies heavily
 * on declarative code.
 *
 * Because Arrays are some of the more commonly used
 * data types, we'll be focusing on (and in the future,
 * heavily relying on) the following built-in array methods
 * that are higher order functions.
 */

/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * Array.forEach() - a higher order function that allows you
 * to perform some action on each element in the called upon
 * array.
 *
 * The callback function provided to the Array.forEach()
 * method is a function that accepts a single element
 * and performs some action.
 *
 * Array.forEach() does not modify the original array in
 * any way, nor does it return anything.
 *
 * Example: For each number in an array, print its square
 * to the console.
 *
 * Expected Output:
 * 4
 * 16
 * 36
 * 64
 */
const numsExample1 = [2, 4, 6, 8];

// .forEach() must be called off the array itself (in this case numsExample1)
// numsExample1.forEach((num) => console.log(num * num));

/**
 * Example 2: For each number in an array, print its square
 * in a numerical list format.
 *
 * Expected Output:
 * 1. 4
 * 2. 16
 * 3. 36
 * 4. 64
 */
// numsExample1.forEach((num, i) => console.log(i + 1 + ". " + num * num));
// numsExample1.forEach((num, i) => console.log(`${i + 1}. ${num * num}`));

/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * Array.map() - a higher order function that allows you to convert
 * an array of elements into a new array of new elements based on
 * the original array.
 *
 * The callback function provided to Array.map() is a function that
 * accepts up to three parameters (element, index, array), and returns
 * the item that should be in the output array.
 *
 * Array.map() itself returns a new array containing the returned result
 * of each execution of the callback function.
 *
 * Example: Given an array of strings, return an array of each string's
 * length.
 *
 * Input:
 * const strings = ["hello", "darkness", "my", "old", "friend"]
 * Expected Output:
 * [5, 8, 2, 3, 6]
 */
const strings = ["hello", "darkness", "my", "old", "friend"];
const mapOutputExample1 = strings.map((str) => str.length);
// console.log("Input array after .map(): ", strings);
// console.log(mapOutputExample1);

/**
 * Example 2: Given an array of objects, return a array of string
 * representations of <li> elements showing data from the objects.
 *
 * Expected Output:
 * [
 *   "<li>Jalen Hurts - No. 1</li>",
 *   "<li>Jason Kelce - No. 62</li>",
 *   "<li>AJ Brown - No. 11</li>"
 * ]
 */
const players = [
  { firstName: "Jalen", lastName: "Hurts", jerseyNum: 1 },
  { firstName: "Jason", lastName: "Kelce", jerseyNum: 62 },
  { firstName: "AJ", lastName: "Brown", jerseyNum: 11 },
];

const mapOutputExample2 = players.map(
  (player) =>
    `<li>${player.firstName} ${player.lastName} - No. ${player.jerseyNum}</li>`
);

/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * Array.filter() - a higher order function that uses a callback function that returns
 * a boolean value to filter the contents of the original array.
 *
 * The callback function should accept up to three parameters (element, index, array)
 * and return a boolean value. The boolean value returned should be true if the
 * element satisfies a certain condition, and false if it does not.
 *
 * Example: Given an array of numbers, return an array of only the numbers
 * lower than 10.
 *
 * Input: const filterNums = [8, 12, 9, 2, 11, 14, 7, 23]
 * Expected Output:
 *    [8, 9, 2, 7]
 */

const filterNums = [8, 12, 9, 2, 11, 14, 7, 23];

const filterOutputExample1 = filterNums.filter((num) => num < 10);
// console.log(filterOutputExample1);

/**
 * Combo Example:
 * Filter an array of strings to only include the strings
 * with at least 4 characters. Then, convert the strings
 * into their lengths
 *
 * Expected Output:
 * [5, 5, 6, 4, 4]
 */
const filterStrings = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog",
];
const outputFilterExample2 = filterStrings
  .filter((str) => str.length >= 4)
  .map((str) => str.length);
// console.log(outputFilterExample2);

/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * Array.find() - effectively, the singular version of .filter(). It is a
 * higher order function responsible for finding the first element in an array
 * that passes some kind of conditional test. However, if no such element
 * can be found, Array.find() will return undefined.
 *
 * Array.find() accepts a callback with up to three parameters (element, index, array)
 * and returns a boolean value. This callback function should structured the same way
 * it is in the .filter() method; return true if the element passes the test, and false
 * if it does not.
 *
 * Example: Find a string with 10 characters.
 * Expected Output: undefined
 */
const findStrings = [
  "peter",
  "piper",
  "picked",
  "a",
  "peck",
  "of",
  "pickled",
  "peppers",
];

const findOutputExample1 = findStrings.find((str) => str.length === 10);
// console.log(findOutputExample1);

/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 * Array.some() - like the .find() method, Array.some() accepts a callback
 * that resolves to true or false. However, rather than returning the element
 * that passes the test, Array.some() simply returns a boolean indicating whether
 * or not any one element in the array passed the test.
 *
 * The callback passed into Array.some() should return a boolean value. If
 * the callback returns true for some element, Array.some() will return true.
 * If Array.some() iterates through every single element in the array, and
 * the callback returns false for every single element, Array.some() will
 * return false.
 *
 * Example: Is there an object in the array with a touchdowns property of
 * 4 or greater.
 *
 * Expected Output: true
 */
const somePlayers = [
  { firstName: "Jalen", lastName: "Hurts", jerseyNum: 1, touchdowns: 15 },
  { firstName: "Jason", lastName: "Kelce", jerseyNum: 62, touchdowns: 0 },
  { firstName: "AJ", lastName: "Brown", jerseyNum: 11, touchdowns: 6 },
];

const someOutputExample1 = somePlayers.some((player) => player.touchdowns >= 4);
// console.log(someOutputExample1);

/**
 *
 * Array.every() - a higher order function that returns true if every single element
 * in the array passes the test provided by the callback.
 *
 * Array.every() accepts a callback function that accepts up to three parameters
 * (element, index, array) and returns true if an individual element passes some
 * test, and false if it does not. However, unlike .some(), .every() will return
 * false as soon as a single iteration of the callback execution returns false.
 *
 * Example: Using the same player array as .some(), return true if every player
 * has at least 4 touchdowns.
 * Expected Output: false
 */
const everyOutputExample1 = somePlayers.every(
  (player) => player.touchdowns >= 4
);
console.log(everyOutputExample1);

/**
 * The above example effectively replaces the following
 */
let result = true;
for (let i = 0; i < somePlayers.length; i++) {
  if (somePlayers[i].touchdowns < 4) {
    result = false;
  }
}
console.log(result);

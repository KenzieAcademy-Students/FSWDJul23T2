// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");

const printKata = function (kataNumber, object) {
  // For the usage of the DETAILS and SUMMARY tags
  // in HTML, see: http://mdn.io/details-element
  const detailsElement = document.createElement("details");
  main.append(detailsElement);
  //
  const summaryElement = document.createElement("summary");
  summaryElement.append("KATA " + kataNumber);
  detailsElement.append(summaryElement);
  //
  // http://mdn.io/json.stringify
  const stringifiedObject = JSON.stringify(object);
  detailsElement.append(stringifiedObject);
};

/**
 * Kata 0: Users with green eyes
 */
const kata0Users = users.filter((user) => (user.eyeColor = "green"));
printKata(0, kata0Users);

/**
 * Array.reduce() - Array.reduce() is a higher order function that you can
 * use to convert an array of elements into a singular item of any data type.
 * Array.reduce() can accept two arguments:
 *  1. The callback function
 *  2. An optional value to be used as the first accumulator value
 *
 * If no 2nd argument is provided, the first iteration's value of accumulator
 * will be the first element in the array.
 *
 * The callback passed into Array.reduce() differs from all of the other
 * higher order functions we have looked at so far. The callback accepts
 * up to four parameters, and requires at least 2 (accumulator, element, index, array)
 *
 * Example: Given an array of objects, return the total sum of all users' balances.
 */

const exampleUsers = [
  { name: "Cody Thaller", balance: 273.35 },
  { name: "Johnathan Britt", balance: 326.87 },
  { name: "Samantha Eisenzimmer", balance: 308.44 },
];

const totalBalance = exampleUsers.reduce(
  (balance, user) => balance + user.balance,
  0
);

printKata(11, totalBalance.toFixed(2));

// function copyAndAddProp(obj, property, value) {
//   let copy = { ...obj, [property]: value };

//   copy[property] = value;

//   return copy;
// }

// const copy = copyAndAddProp({ x: 10 }, "y", 15);
// console.log(copy);

// let objA = {
//   favoriteTeams: ["Florida Panthers", "Philadelphia Eagles", "Miami Heat"],
//   name: "Cody",
// };
// let objB = structuredClone(objA);

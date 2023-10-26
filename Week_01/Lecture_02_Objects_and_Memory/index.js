/**
 * Example of Memory Values in Action:
 * Swapping two variable values
 */
// let x = 10;
// let y = 15;
// let temp = x;
// x = y;
// y = temp;
// console.log(`x = ${x}`);
// console.log(`y = ${y}`);

/**
 * Another example of memory values in action:
 * Set two variables to be equal to each other.
 * Modify one variable, and see how that changes
 * the other.
 */
// let x = 10;
// let y = x;
// // At this point: x = 10, y = 10
// y = y + 5;
// // At this point: x = ?, y = ?
// console.log(`x = ${x}`);
// console.log(`y = ${y}`);

/**
 * Example of Memory References in Action
 */
// let objA = {
//   x: 10,
//   y: 15,
// };
// let objB = objA;
// objB.y = objB.y + 5;

// // Pop Quiz: What will objA.y's value be at this point?
// console.log("objA: ", objA);
// console.log("objB: ", objB);

/**
 * New Scenario:
 * When Jessi and James are buying their van, a third customer
 * walks in. This third customer, Ash, sees Jessi and James looking
 * at the mini van they eventually buy. Ash talks to the salesperson
 * and says "Hey, I want that same van."
 */
// Jessi and James DO have the same object.
// let objA = {
//   x: 10,
//   y: 15,
// };
// let objB = objA;

// // But if Ash gets his van the same way...
// let objC = objA;

/**
 * Pop Quiz Time: Based on the above scenario,
 * how many objects are stored in memory?
 *
 * Correct Answer: 1
 */

// let objA = {
//   x: 10,
//   y: 15,
// };
// let objB = objA;
// /**
//  * We can copy an object through destructuring by doing the following:
//  * 1. Unpack the properties into variables
//  */
// let { x, y } = objA;

// /**
//  * 2. Use a similar destructuring assignment syntax to put
//  * those variables into a new object
//  */
// let objC = { x, y };

/**
 * Alternatively, we can use a Spread Operator
 * to create a shallow copy very easily.
 */
// let objC = { ...objA };

// console.log("objA: ", objA);
// console.log("objB: ", objB);
// console.log("objC: ", objC);
// console.log("Are objA and objB equal: ", objA === objB);
// console.log("Are objA and objC equal: ", objA === objC);

/**
 * 1. Are objA and objB equal?
 */
// let objA = { x: 10, y: 15 };
// let objB = { x: 10, y: 15 };
// console.log("1. Are objA and objB equal: ", objA === objB);
// // Answer: false, because objA is assigned a newly instantiated object,
// // and objB is also assigned a separate newly instantiated object.
// // Regardless of if the two object have the same properties and values,
// // they are two separate objects.

/**
 * 2. Are objA.x and objB.x equal?
 */
// let objA = { x: 10, y: 15 };
// let objB = { x: 10, y: 15 };
// console.log("2. Are objA.x and objB.x equal: ", objA.x === objB.x);
// Answer: true, because objA.x is 10, which is a primitive value, and
// objB.x is 10, which is also a primitive value. Because both primitive
// values are identical, they are equal.

/**
 * 3. Are objA and objB equal?
 */
// let objA = { x: 10, y: 15 };
// let objB = objA;
// console.log("3. Are objA and objB equal: ", objA === objB);
// Answer: true, because objA is the only variable assigned a newly
// instantiated object. When objB is declared, it is assigned objA
// as its value. But in the memory stack, objA's raw value is a simple
// memory address. Thus, when you compare two objects with the same
// referenced object as their values, you are comparing the same thing
// to itself.

/**
 * 4. Are objA and objB equal?
 */
// let objA = { x: 10, y: 15 };
// let objB = { ...objA };
// console.log("4. Are objA and objB equal: ", objA === objB);
// // Answer: false, because objB is assigned a copy of objA as its value.
// // When creating a copy, even though the contents are the same, the
// // value stored in memory is a reference to a second newly instantiated
// // object

/**
 * 5. Are objA.x and objB.x equal?
 */
// let objA = { x: 10, y: 15 };
// let objB = { ...objA };
// objB.x = objB.x + 5;
// console.log("5. Are objA.x and objB.x equal: ", objA.x === objB.x);
// // Answer: false, because even though objA.x and objB.x were equal initially
// // upon the creation of the copy, line 144 modifies the value of objB.x
// // Because objA is not equal to objB, changing the properties of one will not
// // modify the equivalent property of the other.

/**
 * 6. Are objA.x and objB.x equal?
 */
// let objA = { x: 10, y: 15 };
// let objB = objA;
// objB.x = objB.x + 5;
// console.log("6. Are objA.x and objB.x equal: ", objA.x === objB.x);
// // Answer: true, because objB is the same object as objA. Therefore, if they
// // are the same object, any changes to one of them are made to the other.

/**
 * 7. Are objA and objB equal?
 */
let objA = { x: 10, y: 15 };
let objB = objA;
objB = 10;
console.log("7. Are objA and objB equal: ", objA === objB);

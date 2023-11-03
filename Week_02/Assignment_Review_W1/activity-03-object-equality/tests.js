// Unit Tests ------------------------------------------------------------------------
// Do not modify these tests.  They will automatically run in the console and test your code.

import {
  combineArrays,
  combineObjects,
  copyObjectAndAddProperty,
  createShallowCopy,
  haveSameStructure,
  isTheSameObject,
  isTheSameObjectDeep,
  isTheSameObjectShallow,
} from "./code.js";

function kenzieAssert(paramObject) {
  let actual = paramObject.actual;
  let expected = paramObject.expected;
  if (actual === expected) {
    console.log(
      `PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`
    );
  } else {
    console.error(
      `FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`,
      {
        test: paramObject.failureMessage,
        expected: expected,
        actual: actual,
      }
    );
  }
}

// Helper Functions
function createCar(make, model, year, numDoors, numWheels) {
  return {
    make: make,
    model: model,
    year: year,
    numDoors: numDoors,
    numWheels: numWheels,
  };
}

function createBike(manufacturer, year, numGears) {
  return {
    manufacturerDetails: manufacturer,
    year: year,
    numGears: numGears,
  };
}

let car1 = createCar("Ford", "Focus", 2003, 2, 4);
let car2 = createCar("Ford", "Focus", 2003, 2, 4);
let car3 = createCar("Buick", "Encore", 2012, 4, 4);
let car4 = car1;
let car5 = { ...car1 };

const manufacturer = { manufacturer: "Trek", manufacturedIn: "Vancouver, CA" };

let bike1 = createBike(manufacturer, 2019, 18);
let bike2 = createBike(manufacturer, 2019, 18);
let bike3 = createBike(
  { manufacturer: "Trek", manufacturedIn: "Vancouver, CA" },
  2019,
  18
);

console.group("Unit Tests - isTheSameObject");
{
  kenzieAssert({
    actual: isTheSameObject(car1, car4),
    expected: true,
    testNumber: 1,
    testFunction: "isTheSameObject",
    failureMessage: "isTheSameObjectShallow is true if the object is the same",
  });
  kenzieAssert({
    actual: isTheSameObject(car1, car2),
    expected: false,
    testNumber: 2,
    testFunction: "isTheSameObject",
    failureMessage:
      "isTheSameObject is false if the object is not exactly the same",
  });
  kenzieAssert({
    actual: isTheSameObject(car1, car3),
    expected: false,
    testNumber: 3,
    testFunction: "isTheSameObject",
    failureMessage:
      "isTheSameObject is false if the object are completely different",
  });
  kenzieAssert({
    actual: isTheSameObject(car1, {
      make: "Ford",
      model: "Focus",
      year: 2002,
      numDoors: 2,
      numWheels: 4,
    }),
    expected: false,
    testNumber: 4,
    testFunction: "isTheSameObject",
    failureMessage:
      "isTheSameObject is false if similar objects do not reference the same memory location",
  });
}
console.groupEnd();

console.group("Unit Tests - isTheSameObjectShallow");
{
  kenzieAssert({
    actual: isTheSameObjectShallow(car1, car4),
    expected: false,
    testNumber: 1,
    testFunction: "isTheSameObjectShallow",
    failureMessage:
      "isTheSameObjectShallow is only true if the object has the same properties and values, but the object itself is not the same.",
  });
  kenzieAssert({
    actual: isTheSameObjectShallow(car1, car5),
    expected: true,
    testNumber: 2,
    testFunction: "isTheSameObjectShallow",
    failureMessage:
      "isTheSameObjectShallow is true if both objects have the same properties and values, but the object itself is not the same.",
  });
  kenzieAssert({
    actual: isTheSameObjectShallow(bike1, bike2),
    expected: true,
    testNumber: 3,
    testFunction: "isTheSameObjectShallow",
    failureMessage:
      "isTheSameObjectShallow is true if the property values are the same; any nested objects or arrays must be the same in memory for both.",
  });
  kenzieAssert({
    actual: isTheSameObjectShallow(bike1, bike3),
    expected: false,
    testNumber: 4,
    testFunction: "isTheSameObjectShallow",
    failureMessage:
      "isTheSameObjectShallow is false if nested objects are shallow copies of other nested objects, because they are at different memory locations.",
  });
}

console.group("Unit Tests - haveSameStructure");
{
  kenzieAssert({
    actual: haveSameStructure(car1, car1),
    expected: true,
    testNumber: 1,
    testFunction: "haveSameStructure",
    failureMessage: "haveSameStructure is true if the object is the same",
  });
  kenzieAssert({
    actual: haveSameStructure(car1, car3),
    expected: true,
    testNumber: 2,
    testFunction: "haveSameStructure",
    failureMessage:
      "haveSameStructure is true if the objects have the same properties but values are different",
  });
  kenzieAssert({
    actual: haveSameStructure(car1, {
      make: "make",
      model: "model",
      year: "year",
    }),
    expected: false,
    testNumber: 3,
    testFunction: "haveSameStructure",
    failureMessage:
      "haveSameStructure is false when the second object is missing the properties of the first",
  });
  kenzieAssert({
    actual: haveSameStructure(
      {
        make: "make",
        model: "model",
        year: "year",
      },
      car1
    ),
    expected: false,
    testNumber: 4,
    testFunction: "haveSameStructure",
    failureMessage:
      "haveSameStructure is false when the first object is missing the properties of the second",
  });
  kenzieAssert({
    actual: haveSameStructure(
      {
        make: "Ford",
        numDoors: 2,
        model: "Focus",
        numWheels: 4,
        year: 2003,
      },
      car1
    ),
    expected: true,
    testNumber: 5,
    testFunction: "haveSameStructure",
    failureMessage: "haveSameStructure is true even if keys are out of order",
  });
  kenzieAssert({
    actual: haveSameStructure(
      {
        make: "Ford",
        numDoors: 2,
        model: "Focus",
      },
      {
        make: "Ford",
        numWheels: 4,
        year: 2003,
      }
    ),
    expected: false,
    testNumber: 6,
    testFunction: "haveSameStructure",
    failureMessage:
      "haveSameStructure is false if objects are different but have same number of keys",
  });
}
console.groupEnd();

console.group("Unit Tests - isTheSameObjectDeep");
{
  kenzieAssert({
    actual: isTheSameObjectDeep(car1, car4),
    expected: true,
    testNumber: 1,
    testFunction: "isTheSameObjectDeep",
    failureMessage: "isTheSameObjectDeep is true if the object is the same",
  });
  kenzieAssert({
    actual: isTheSameObjectDeep(car1, car2),
    expected: true,
    testNumber: 2,
    testFunction: "isTheSameObjectDeep",
    failureMessage:
      "isTheSameObjectDeep is true if the objects have the same properties and values",
  });
  kenzieAssert({
    actual: isTheSameObjectDeep(car1, car3),
    expected: false,
    testNumber: 3,
    testFunction: "isTheSameObjectDeep",
    failureMessage:
      "isTheSameObjectDeep is false if the objects are completely different",
  });
  kenzieAssert({
    actual: isTheSameObjectDeep(
      {
        make: "Ford",
        numDoors: 2,
        model: "Focus",
      },
      car2
    ),
    expected: false,
    testNumber: 4,
    testFunction: "isTheSameObjectDeep",
    failureMessage: "isTheSameObjectDeep is false if a is missing keys",
  });
  kenzieAssert({
    actual: isTheSameObjectDeep(car2, {
      make: "Ford",
      numDoors: 2,
      model: "Focus",
    }),
    expected: false,
    testNumber: 5,
    testFunction: "isTheSameObjectDeep",
    failureMessage: "isTheSameObjectDeep is false if b is missing keys",
  });
  kenzieAssert({
    actual: isTheSameObjectDeep(
      {
        make: "Ford",
        numDoors: 2,
        model: "Focus",
        numWheels: 4,
        year: 2003,
      },
      car1
    ),
    expected: true,
    testNumber: 6,
    testFunction: "isTheSameObjectDeep",
    failureMessage: "isTheSameObjectDeep is true even if keys are out of order",
  });
  kenzieAssert({
    actual: isTheSameObjectDeep(
      {
        make: "Ford",
        numDoors: 2,
        settings: {
          engine: "two speed",
          overdrive: true,
        },
      },
      {
        make: "Ford",
        numDoors: 2,
        settings: {
          overdrive: true,
          engine: "two speed",
        },
      }
    ),
    expected: true,
    testNumber: 7,
    testFunction: "isTheSameObjectDeep",
    failureMessage:
      "isTheSameObjectDeep checks nested objects with out of order keys",
  });
  kenzieAssert({
    actual: isTheSameObjectDeep(
      {
        make: "Ford",
        numDoors: 2,
        settings: {
          engine: "two speed",
          overdrive: false,
        },
      },
      {
        make: "Ford",
        numDoors: 2,
        settings: {
          overdrive: true,
          engine: "two speed",
        },
      }
    ),
    expected: false,
    testNumber: 8,
    testFunction: "isTheSameObjectDeep",
    failureMessage:
      "isTheSameObjectDeep checks nested objects with different values",
  });
}
console.groupEnd();

// Tests using the modified function

function kenzieAssertModified(paramObject) {
  let actual = paramObject.actual;
  let expected = paramObject.expected;
  if (paramObject.passCondition || actual === expected) {
    console.log(
      `PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`
    );
  } else {
    console.error(
      `FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`,
      {
        test: paramObject.failureMessage,
        expected: paramObject.failExpected || expected,
        actual: paramObject.failactual || actual,
      }
    );
  }
}

console.group("Unit Tests - createShallowCopy");
{
  let actual = createShallowCopy(car1);
  let expected = car1;
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition: actual !== expected,
    testNumber: 1,
    testFunction: "createShallowCopy",
    failureMessage:
      "createShallowCopy returns an object which is not the same object as the argument",
    failExpected: true,
    failactual: actual !== expected,
  });
  {
    for (let property in actual) {
      kenzieAssertModified({
        actual: actual,
        expected: expected,
        passCondition: actual !== expected,
        testNumber: 2,
        testFunction: "createShallowCopy",
        failureMessage:
          "createShallowCopy - every property of the shallow copy is identical to the original",
        failExpected: expected[property],
        failactual: actual[property],
      });
    }
    for (let property in car1) {
      kenzieAssertModified({
        actual: actual,
        expected: expected,
        passCondition: actual !== expected,
        testNumber: 3,
        testFunction: "createShallowCopy",
        failureMessage:
          "createShallowCopy - every property of the original is identical to the shallow copy",
        failExpected: expected[property],
        failactual: actual[property],
      });
    }
  }
}
console.groupEnd();

console.group("Unit Tests - combineArrays");
{
  let a = ["a", "b"];
  let b = ["c", "d"];
  let actual = combineArrays(a, b);
  let expected = [4, "a", "b", "c", "d"];
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition:
      actual.length === expected[0] &&
      actual[0] === expected[1] &&
      actual[1] === expected[2] &&
      actual[2] === expected[3] &&
      actual[3] === expected[4],
    testNumber: 1,
    testFunction: "combineArrays",
    failureMessage: "combineArrays combines the two arrays",
    failExpected: [expected[1], expected[2], expected[3], expected[4]],
  });
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition: actual !== a && actual !== b,
    testNumber: 2,
    testFunction: "combineArrays",
    failureMessage:
      "combineArrays creates a new array which is not the same as either input",
    failExpected: true,
    failactual: false,
  });
}
console.groupEnd();

console.group("Unit Tests - combineObjects");
{
  let a = {
    name: "George",
    age: 23,
  };
  let b = {
    city: "Cleveland",
    state: "Ohio",
  };
  let actual = combineObjects(a, b);
  let expected = ["George", 23, "Cleveland", "Ohio"];
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition:
      actual.name === expected[0] &&
      actual.age === expected[1] &&
      actual.city === expected[2] &&
      actual.state === expected[3],
    testNumber: 1,
    testFunction: "combineObjects",
    failureMessage: "combineObjects combines the two objects",
    failExpected: {
      name: expected[0],
      age: expected[1],
      city: expected[2],
      state: expected[3],
    },
  });
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition: actual !== a && actual !== b,
    testNumber: 2,
    testFunction: "combineObjects",
    failureMessage:
      "combineObjects creates a new object which is not the same as either input",
    failExpected: true,
    failactual: false,
  });
}
console.groupEnd();

console.group("Unit Tests - copyObjectAndAddProperty");
{
  let person = {
    name: "George",
    age: 23,
  };
  let actual = copyObjectAndAddProperty(person, "location", "San Francisco");
  let expected = ["George", 23, "San Francisco"];
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition:
      actual.name === expected[0] &&
      actual.age === expected[1] &&
      actual.location === expected[2],
    testNumber: 1,
    testFunction: "copyObjectAndAddProperty",
    failureMessage:
      "copyObjectAndAddProperty creates an object with the objects properties as well as the new property",
    failExpected: {
      name: expected[0],
      age: expected[1],
      location: expected[2],
    },
  });
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition: actual !== person,
    testNumber: 2,
    testFunction: "copyObjectAndAddProperty",
    failureMessage:
      "copyObjectAndAddProperty creates a new object which is not the original",
    failExpected: true,
    failactual: false,
  });
  kenzieAssertModified({
    actual: actual,
    expected: expected,
    passCondition: !person.location,
    testNumber: 3,
    testFunction: "copyObjectAndAddProperty",
    failureMessage:
      "copyObjectAndAddProperty does not modify the object argument",
    failExpected: true,
    failactual: false,
  });
}
console.groupEnd();

// In 10 seconds, I want to know if it is a specific time yet (or later).
const myPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let now = Date.now();

      if (now >= time) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 10000);
  });
};

const timeToCheck = new Date("2023-11-16T10:30:00");

/**
 * FOCUS HERE: How to use a promise
 */
myPromise(timeToCheck.getTime())
  .then((isItTime) => console.log("Yes, it is time:", isItTime))
  .catch((isItTime) => console.log("No, it is not time:", isItTime));

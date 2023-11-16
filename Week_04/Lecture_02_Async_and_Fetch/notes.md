## Resources
## Vocab
- **fetch** - a browser-based built-in JavaScript function that is capable of sending an HTTP request to a given URL. It is an asynchronous, promise-based, function. 

Example of usage:
```js
//      v the URL needs to be a string
fetch(some_url)
  .then((response) => response.json()) // < assuming the response is an object, we need to convert to a JSON object
  .then((data) => /* do what you want with the data */) // < once the response has been converted to the JSON object, it gets passed into the second .then, where you can now use it
  .catch((err) => /* do what you want if there's an error */) // < with HTTP requests, the catch being triggered means an error occurred with the request
```
- **promise** - a Promise is an object that represents the eventual completion or failure of an asynchronous operation, and its resulting value.
// This file to to test that you have not modified the data sets.


console.assert(JSON.stringify(movies) === moviesJSON, {
  message: "WARNING - movies dataset has has been modified!!",
})

console.assert(JSON.stringify(movieDetails) === movieDetailsJSON, {
  message: "WARNING - movieDetails dataset has been modified!!",
})
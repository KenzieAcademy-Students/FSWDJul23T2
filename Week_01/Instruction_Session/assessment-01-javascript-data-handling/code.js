// Your Code Here!

console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);

const combinedMovies = movieDetails
  .map((movieDetail) => {
    const sameMovie = movies.find((movie) => movie.title === movieDetail.title);
    if (sameMovie) return { ...movieDetail, ...sameMovie };
  })
  .filter((movie) => movie !== undefined);

function renderMovies(movies) {
  const container = document.getElementById("filtered-movies");
  container.innerHTML = "";

  // Using .map(), convert the movies
  // parameter into an array of HTML strings. Then using
  // .reduce(), combine all of the HTML strings
  // into one long string, and set it as the container's
  // .innerHTML
}

function filterMovies() {
  // Step 1: Access the value in the movie title search box
  // Step 2: Access the value in the actor/actress search box
  // Step 3: Using .filter(), search for only the movies
  // with a title containing the value from step 1, and
  // a cast array that .includes() the value from step 2
  // Step 3: Take the resulting array and pass it into the above
  // defined renderMovies() function
}

renderMovies(combinedMovies);

/**
 * WARNING: The following in its current form will not work.
 * You will need to both modify it, and put it in te right place.
 * It's just an example.
 */
// movies.filter(
//   (movie) =>
//     movie.title.toLowerCase().includes(searchTitle) &&
//     movie.cast
//       .map((castMember) => castMember.toLowerCase())
//       .includes(searchCast.toLowerCase())
// );

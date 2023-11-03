// Your Code Here!
const movieContainer = document.getElementById("now-showing");
const titleInput = document.getElementById("title");
const castInput = document.getElementById("cast-member");
const resetButton = document.getElementById("reset");

// Step 1: Create a new array that is a combination of the two provided.
// Don't just take everything from one and everything from the other, but rather
// find the movie from both that match, and combine them into a single object,
// and add that object to the new array.

const baseMovies = movies.length >= movieDetails.length ? movies : movieDetails;
const otherMovies = baseMovies === movies ? movieDetails : movies;
const combinedMovies = baseMovies
  .map((baseMovie) => {
    // Is there an equivalent movie in the other array?
    const otherMovie = otherMovies.find(
      (movie) => movie.title === baseMovie.title
    );
    if (!otherMovie) return undefined;

    return { ...baseMovie, ...otherMovie };
  })
  .filter((movie) => movie !== undefined);

// Step 2: Create a function that accepts a single movie and returns
// DOM HTML to be rendered
function generateMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("card");

  // Create the title element
  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerText = movie.title;

  // Create the picture element
  const poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = movie.imageUrl;
  poster.alt = movie.title;

  // Create the cast list element
  const cast = document.createElement("p");
  cast.classList.add("cast");
  cast.innerText = movie.cast.join(", ");

  // Create the release year element
  const year = document.createElement("p");
  year.classList.add("year");
  year.innerText = movie.year;

  // Append all elements to the card
  movieCard.append(title, poster, cast, year);
  return movieCard;
}

// Step 3: Create a function that accepts multiple movies and renders
// the card for all of them
function renderMovies(movies) {
  movieContainer.innerHTML = "";

  if (movies.length === 0) {
    movieContainer.innerHTML = "<p>No results, please search again.</p>";
    return;
  }

  const allMovieCards = movies.map(generateMovieCard);

  movieContainer.append(...allMovieCards);
}

// Step 4: Create a function that will accept two parameters:
// searchTitle and searchCast, and filters for movies that
// match those queries, and renders them.
function filterMovies(searchTitle, searchCast) {
  searchTitle = searchTitle.toLowerCase();
  searchCast = searchCast.toLowerCase();
  const filteredMovies = combinedMovies
    .filter((movie) => movie.title.toLowerCase().includes(searchTitle))
    .filter((movie) =>
      movie.cast.some((castMember) =>
        castMember.toLowerCase().includes(searchCast)
      )
    );

  renderMovies(filteredMovies);
}

// Step 5: Add an event listener to a form for the search features.
const form = document.getElementById("search-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTitle = titleInput.value;
  const searchCast = castInput.value;
  filterMovies(searchTitle, searchCast);
});

// BONUS STEP: On clicking the reset button, clear the inputs and
// render all movies
resetButton.addEventListener("click", (e) => {
  titleInput.value = "";
  castInput.value = "";
  renderMovies(combinedMovies);
});

// Render all movies on app load
window.addEventListener("load", (e) => renderMovies(combinedMovies));

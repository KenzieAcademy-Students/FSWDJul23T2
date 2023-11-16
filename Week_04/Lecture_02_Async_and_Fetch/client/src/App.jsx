import { useState, useEffect } from "react";
import "./App.css";
import CharacterListItem from "./components/CharacterListItem";

const STAR_WARS_CHARACTERS_URL = "https://swapi.dev/api/people";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacterData = (url = STAR_WARS_CHARACTERS_URL) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Something went wrong:", err);
        setIsLoading(false);
      });
  };

  const getNextPage = () => {
    if (!nextPageUrl) return;

    fetchCharacterData(nextPageUrl);
  };

  const getPrevPage = () => {
    if (!prevPageUrl) return;

    fetchCharacterData(prevPageUrl);
  };

  useEffect(fetchCharacterData, []);

  // fetch is an asynchronous promise that will send an HTTP request and provide the
  // response
  // fetch(STAR_WARS_CHARACTERS_URL)
  //   // .then() is the method representing the promise fulfillment and its returned value
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setCharacters(data.results);
  //     setNextPageUrl(data.next);
  //     setPrevPageUrl(data.previous);
  //   })
  //   // .catch() is the method representing the promise rejection and its returned value
  //   .catch((err) => {
  //     console.log("Something went wrong:", err);
  //   });
  // For both .then() and .catch(), if you wish to access what is "returned" by
  // the promise, you must pass in a callback function. The callback's parameter
  // will be the resolved result (in .then()), or the rejected result (in .catch())

  return (
    <>
      <h1>Star Wars Characters</h1>
      {isLoading ? (
        <p>Loading, please wait...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <CharacterListItem key={character.url} character={character} />
          ))}
        </ul>
      )}
      <div className="pagination">
        <button disabled={prevPageUrl === null} onClick={getPrevPage}>
          Previous
        </button>
        <button disabled={nextPageUrl === null} onClick={getNextPage}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;

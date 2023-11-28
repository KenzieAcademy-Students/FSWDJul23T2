import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [numToDisplay, setNumToDisplay] = useState(16);

  // This function should be called with a photo id to fetch a photo.
  const getPhotoFromId = (photoId) => {
    return `https://picsum.photos/id/${photoId}/200/200`;
  };
  // This URL can be used to get an array of objects that contain information about various photos.
  const PHOTO_LIST_URL = "https://picsum.photos/list";

  const fetchPhotos = () => {
    fetch(PHOTO_LIST_URL)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Photo Wall</h1>
      </header>
      <div className="collage">
        {photos &&
          photos
            .filter((_, i) => i < numToDisplay)
            .map((photo) => (
              <img
                alt={photo.fileName}
                key={photo.id}
                src={getPhotoFromId(photo.id)}
              />
            ))}
      </div>
      <footer>
        <button
          id="load-btn"
          onClick={() => setNumToDisplay(numToDisplay + 16)}
        >
          Load More
        </button>
      </footer>
    </div>
  );
};

export default App;

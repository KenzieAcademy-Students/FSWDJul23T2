import { useEffect, useState } from "react";
import "./App.css";
import { AdoptableDog, AdoptedDogs } from "./components";

const App = () => {
  const [time, setTime] = useState(5);
  const [photos, setPhotos] = useState({
    dog: "",
    adopted: [],
  });

  const PHOTO_URL = "https://dog.ceo/api/breeds/image/random";

  const fetchDog = () => {
    fetch(PHOTO_URL)
      .then((response) => response.json())
      .then((data) => {
        setPhotos((currPhotos) => ({ ...currPhotos, dog: data.message }));
        window.addEventListener("keydown", handleArrowKeyDown);
      })
      .catch((err) => console.log(err));
  };

  const adoptDog = () =>
    setPhotos((currPhotos) => ({
      ...currPhotos,
      adopted: [...currPhotos.adopted, currPhotos.dog],
    }));

  const handleArrowKeyDown = (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) {
      return;
    }

    window.removeEventListener("keydown", handleArrowKeyDown);
    if (e.key === "ArrowLeft") {
      fetchDog();
    } else if (e.key === "ArrowRight") {
      adoptDog();
      fetchDog();
    }
    setTime(5);
  };

  useEffect(() => {
    fetchDog();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime((currTime) => {
        if (currTime > 0) {
          return currTime - 1;
        }

        window.removeEventListener("keydown", handleArrowKeyDown);
        fetchDog();
        return 5;
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time]);

  return (
    <div className="App">
      <header>
        <h1>Doggie Speed Dating</h1>
        <h3>
          Press the arrow keys on your keyboard. Left to skip, Right to Adopt.
        </h3>
      </header>
      <AdoptableDog url={photos.dog} time={time} />
      <AdoptedDogs dogs={photos.adopted} />
    </div>
  );
};

export default App;

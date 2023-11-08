import { useState } from "react";
import "./App.css";
import Roster from "./components/Roster";
import players from "./players";

function App() {
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const displayForm = (e) => setDisplayLoginForm(true);
  const hideForm = (e) => setDisplayLoginForm(false);

  const logIn = (e) => setIsLoggedIn(true);
  const logOut = (e) => setIsLoggedIn(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn();
    hideForm();
  };

  return (
    <div className="container">
      <header className="top-nav flex-between">
        <h1>Cody's Cool Csports Cwebsite</h1>
        <div>
          <button
            className={isLoggedIn ? "logoutButton" : "loginButton"}
            onClick={isLoggedIn ? logOut : displayForm}
          >
            Log {isLoggedIn ? "Out" : "In"}
          </button>
        </div>
      </header>

      <Roster playerList={players} />

      {displayLoginForm && (
        <div className="modal">
          <form className="login-form" onSubmit={handleSubmit}>
            <button className="close-button" onClick={hideForm}>
              X
            </button>
            <label htmlFor="email">
              Email:
              <input type="text" name="email" id="email" />
            </label>

            <label htmlFor="password">
              Password:
              <input type="password" name="password" id="password" />
            </label>

            <input type="submit" value="Log In" />
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

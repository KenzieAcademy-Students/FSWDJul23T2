import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logIn = (e) => setIsLoggedIn(true);

  const logOut = (e) => setIsLoggedIn(false);

  return (
    <>
      <header>
        <div>
          {/* 
            Example of a ternary operator to perform conditional rendering 
          */}
          {/* {isLoggedIn === true ? (
            <button onClick={logOut}>Log Out</button>
          ) : (
            <button onClick={logIn}>Log In</button>
          )} */}
          {/* 
            Conditional rendering is not limited to just rendering HTML itself.
            We can use conditional statements to conditionally change simple text,
            prop values, callback functions, etc.
          */}
          <button
            className={isLoggedIn ? "logoutButton" : "loginButton"}
            onClick={isLoggedIn ? logOut : logIn}
          >
            Log {isLoggedIn ? "Out" : "In"}
          </button>
        </div>
      </header>
    </>
  );
}

export default App;

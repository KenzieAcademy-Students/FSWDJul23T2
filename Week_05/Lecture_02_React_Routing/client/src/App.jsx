import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  HomePage,
  CareersPage,
  NotFoundPage,
  SalariesPage,
  SignupPage,
} from "./pages";
import { useState } from "react";
import { Header } from "./components";
/**
 * Define our routes within App.jsx
 */
function App() {
  const [user, setUser] = useState(null);
  /**
   * Get the `navigate` function by calling useNavigate() alongside
   * your other hook calls
   */
  const navigate = useNavigate();

  const signupUser = (email, password, confirmPassword) => {
    // pretend we're passing the email and passwords to
    // some url through fetch. then when we get a response
    // back saying it's been accepted, let's take the user's
    // email and set it in state, and navigate to the salaries
    // page
    setUser({ email });

    // programmatically navigate by using a new hook.
    // navigate accepts an argument; the url you wish to navigate to
    navigate("/salaries");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/salaries" element={<SalariesPage user={user} />} />
        <Route
          path="/signup"
          element={<SignupPage handleSignup={signupUser} />}
        />
        {/* 
          Using a path of "*" allows us to create what is called
          a catch route 
        */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

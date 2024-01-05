import React, { useState } from "react";
import authContext from "../contexts/authContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    setUser({
      name: userData.firstName.value + " " + userData.lastName.value[0] + ".",
      email: userData.email.value,
    });
  };

  const logoutUser = () => setUser(null);

  return (
    <authContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

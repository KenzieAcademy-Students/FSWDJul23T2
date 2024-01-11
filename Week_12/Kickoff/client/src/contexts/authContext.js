import { createContext, useEffect, useReducer } from "react";

const authContext = createContext();
export default authContext;

const initialState = {
  isLoaded: false,
  isAuthorized: false,
  user: null,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);
  switch (action.type) {
    case "SIGNIN": {
      newState.isAuthorized = true;
      newState.user = action.payload;
      newState.isLoaded = true;
      return newState;
    }
    case "SIGNOUT": {
      newState.isAuthorized = false;
      newState.user = null;
      newState.isLoaded = true;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let savedUser = localStorage.getItem("app-auth");

    if (!savedUser) dispatch({ type: "SIGNOUT" });
    else dispatch({ type: "SIGNIN", payload: JSON.parse(savedUser).user });
  }, []);

  return (
    <authContext.Provider value={{ auth, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

import { createContext, useContext, useReducer } from "react";
import api, { setAuthToken } from "../utils/api.utils";
import { toast } from "react-toastify";

const authContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case "SIGN_IN": {
      newState.isAuthenticated = true;
      newState.user = action.payload;
      return newState;
    }
    case "SIGN_OUT": {
      newState.isAuthenticated = false;
      newState.user = null;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const { state, dispatch } = useContext(authContext);

  const signUp = async (username, password, confirmPassword) =>
    api
      .post("/auth/signup", { username, password, confirmPassword })
      .then((res) => signIn(username, password))
      .catch((err) => {
        toast.error("Sign up failed, please try again.");
      });

  const signIn = async (username, password) =>
    api.post("/auth/signin", { username, password }).then((res) => {
      const { token, user } = res.data;
      dispatch({ type: "SIGN_IN", payload: user });
      setAuthToken(token);
    });

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
    setAuthToken();
  };

  return {
    auth: state,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;

import { useReducer } from "react";

const initialState = {
  user: null,
  theme: "light",
  counter: 0,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case "LOG_IN": {
      newState.user = action.payload;
      return newState;
    }
    case "LOG_OUT": {
      newState.user = null;
      return newState;
    }
    case "SET_THEME_DARK": {
      newState.theme = "dark";
      return newState;
    }
    case "SET_THEME_LIGHT": {
      newState.theme = "light";
    }
    case "INCREMENT_COUNT": {
      newState.counter++;
      return newState;
    }
    default: {
      return state;
    }
  }
};

const useAdvancedProvider = () => {
  return useReducer(reducer, initialState);
};

export default useAdvancedProvider;

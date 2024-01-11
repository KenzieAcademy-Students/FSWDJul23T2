import { createContext, useEffect, useReducer } from "react";

const themeContext = createContext();
export default themeContext;

const initialTheme = {
  theme: "light",
  fontSize: 1,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);
  switch (action.type) {
    case "TOGGLE_THEME": {
      newState.theme = newState.theme === "light" ? "dark" : "light";
      return newState;
    }
    case "SET_THEME": {
      if (!["light", "dark"].includes(action.payload)) return newState;

      newState.theme = action.payload;
      return newState;
    }
    case "SET_DARK": {
      newState.theme = "dark";
      return newState;
    }
    case "SET_LIGHT": {
      newState.theme = "light";
      return newState;
    }
    case "INCREASE_FONT_SIZE": {
      newState.fontSize++;
      return newState;
    }
    case "DECREASE_FONT_SIZE": {
      newState.fontSize--;
      return newState;
    }
    case "SET_FONT_SIZE": {
      newState.fontSize = action.payload;
      return newState;
    }
    case "SET_PREFS": {
      newState.fontSize = action.payload.fontSize;
      newState.theme = action.payload.theme;
      return newState;
    }
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, initialTheme);

  useEffect(() => {
    let localSavedTheme = localStorage.getItem("themePrefs");
    if (localSavedTheme) {
      localSavedTheme = JSON.parse(localSavedTheme);
      dispatch({ type: "SET_PREFS", payload: localSavedTheme });
    } else {
      localStorage.setItem("themePrefs", JSON.stringify(theme));
    }
  }, []);

  useEffect(() => {
    let localSavedTheme = localStorage.getItem("themePrefs");
    if (localSavedTheme) {
      const { theme: savedTheme, fontSize: savedFontSize } =
        JSON.parse(localSavedTheme);

      if (savedTheme !== theme.theme || savedFontSize !== theme.fontSize) {
        localStorage.setItem("themePrefs", JSON.stringify(theme));
      }
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};

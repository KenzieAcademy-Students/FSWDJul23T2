import { useContext } from "react";
import { advancedContext } from "../contexts/AdvancedContext/AdvancedProvider";

const useAdvanced = () => {
  const { state, dispatch } = useContext(advancedContext);

  const signinUser = (username, profile_image) =>
    dispatch({ type: "LOG_IN", payload: { username, profile_image } });

  const signoutUser = () => dispatch({ type: "LOG_OUT" });

  const toggleTheme = () =>
    dispatch({
      type: state.theme === "light" ? "SET_THEME_DARK" : "SET_THEME_LIGHT",
    });

  const setThemeDark = () => dispatch({ type: "SET_THEME_DARK" });

  const setThemeLight = () => dispatch({ type: "SET_THEME_LIGHT" });

  const incrementCount = () => dispatch({ type: "INCREMENT_COUNT" });

  return {
    ...state,
    signinUser,
    signoutUser,
    toggleTheme,
    setThemeDark,
    setThemeLight,
    incrementCount,
  };
};

export default useAdvanced;

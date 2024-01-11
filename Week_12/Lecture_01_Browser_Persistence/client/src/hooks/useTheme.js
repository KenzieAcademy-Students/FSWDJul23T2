import { useContext } from "react";
import themeContext from "../contexts/themeContext";

const useTheme = () => {
  const { theme, dispatch } = useContext(themeContext);

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });
  const increaseFontSize = () => dispatch({ type: "INCREASE_FONT_SIZE" });
  const decreaseFontSize = () => dispatch({ type: "DECREASE_FONT_SIZE" });

  return {
    ...theme,
    toggleTheme,
    increaseFontSize,
    decreaseFontSize,
  };
};

export default useTheme;

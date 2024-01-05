import { createContext } from "react";
import useAdvancedProvider from "./useAdvancedProvider";

export const advancedContext = createContext();

const AdvancedProvider = ({ children }) => {
  const [state, dispatch] = useAdvancedProvider();
  console.log("CONTEXT STATE:", state);
  return (
    <advancedContext.Provider value={{ state, dispatch }}>
      {children}
      <span className="page-nav-count">{state.counter}</span>
    </advancedContext.Provider>
  );
};

export default AdvancedProvider;

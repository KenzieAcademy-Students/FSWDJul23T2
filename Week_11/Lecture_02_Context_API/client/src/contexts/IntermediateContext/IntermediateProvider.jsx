import { createContext, useState } from "react";

export const uiContext = createContext();

const IntermediateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("UI CONTEXT USER VALUE:", user);

  return (
    <uiContext.Provider value={{ user, setUser }}>
      {children}
    </uiContext.Provider>
  );
};

export default IntermediateProvider;

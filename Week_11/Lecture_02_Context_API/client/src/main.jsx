import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import BasicProvider from "./contexts/BasicContext/BasicProvider.jsx";
import IntermediateProvider from "./contexts/IntermediateContext/IntermediateProvider.jsx";
import AdvancedProvider from "./contexts/AdvancedContext/AdvancedProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <BasicProvider> */}
    {/* <IntermediateProvider> */}
    <AdvancedProvider>
      <App />
    </AdvancedProvider>
    {/* </IntermediateProvider> */}
    {/* </BasicProvider> */}
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

/**
 * By adding BrowserRouter to main.jsx, we are enabling the full suite
 * of react-router-dom's features to be used in any component we create
 * and render.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

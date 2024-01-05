import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components"
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

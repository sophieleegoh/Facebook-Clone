import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { StateProvider } from "./stateProvider";
import reducer, { initialState } from "./reducer";

// The 'App' element needs to go wherever the second parameter specifies
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);

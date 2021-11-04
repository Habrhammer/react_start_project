import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import store from "./state.js";

import "./index.css";

function rerenderEntireTree() {
  ReactDOM.render(
    <Router>
      <App
        appData={store.getState()}
        dispatch={store.dispatch.bind(store)} 
      />
    </Router>,
    document.getElementById("root")
  );
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

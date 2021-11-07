import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/redux-store";

import "./index.css";

function rerenderEntireTree(state) {
  ReactDOM.render(
    <Router>
      <App state={state} dispatch={store.dispatch.bind(store)}  store={store}/>
    </Router>,
    document.getElementById("root")
  );
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

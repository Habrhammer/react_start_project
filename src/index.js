import React from "react";
import ReactDOM from "react-dom";
import {
  addPost,
  sendMessage,
  subscribe,
  updateMessageText,
  updateNewPostText,
} from "./state.js";

import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import state from "./state.js";

import "./index.css";

function rerenderEntireTree() {
  ReactDOM.render(
    <Router>
      <App
        appData={state}
        addPost={addPost}
        sendMessage={sendMessage}
        updateMessageText={updateMessageText}
        updateNewPostText={updateNewPostText}
      />
    </Router>,
    document.getElementById("root")
  );
}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

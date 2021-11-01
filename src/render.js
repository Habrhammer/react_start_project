import React from 'react';
import ReactDOM from 'react-dom';
import state, { addMessage } from './state.js';

import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

export function rerenderEntireTree() {
  ReactDOM.render(
    <Router>
      <App appData={state} addMessage={addMessage} />
    </Router>,
    document.getElementById("root")
  );
}

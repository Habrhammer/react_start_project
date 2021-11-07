import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  console.log(props);
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar store={props.store} dispatch={props.dispatch} />

      <Route
        path="/dialogs"
        render={() => {
          return <DialogsContainer store={props.store} dispatch={props.dispatch} />;
        }}
      />
      <Route
        path="/profile"
        render={() => {
          return <Profile store={props.store} dispatch={props.dispatch} />;
        }}
      />
    </div>
  );
}

export default App;

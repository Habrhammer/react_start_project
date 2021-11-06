import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar appData={props.appData} dispatch={props.dispatch} />

      <Route
        path="/dialogs"
        render={() => {
          return <Dialogs appData={props.appData} dispatch={props.dispatch} />;
        }}
      />
      <Route
        path="/profile"
        render={() => {
          return <Profile appData={props.appData} dispatch={props.dispatch} />;
        }}
      />
    </div>
  );
}

export default App;

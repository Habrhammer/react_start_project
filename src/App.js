import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(props) {

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <Route
          path="/dialogs"
          render={() => {
            return (<Dialogs appData={props.appData}/>);
          }}
        />
        <Route
          path="/profile"
          render={() => {
            return (<Profile postData = {props.postData} />);
          }}
        />
      </div>
    </Router>
  );
}

export default App;

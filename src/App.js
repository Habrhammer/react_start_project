import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />

      <Route
        path="/dialogs"
        render={() => {
          return <DialogsContainer />;
        }}
      />
      <Route
        path="/profile"
        render={() => {
          return <Profile />;
        }}
      />
      <Route
        path="/users"
        render={() => {
          return <UsersContainer />;
        }}
      />
    </div>
  );
}

export default App;

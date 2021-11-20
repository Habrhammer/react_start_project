import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Sidebar />

      <Route
        path="/dialogs"
        render={() => {
          return <DialogsContainer />;
        }}
      />
      <Route
        path="/profile/:userId?"
        render={() => {
          return <ProfileContainer />;
        }}
      />
      <Route
        path="/users"
        render={() => {
          return <UsersContainer />;
        }}
      />
        <Route
        path="/login"
        render={() => {
          return <Login />;
        }}
      />
    </div>
  );
}

export default App;

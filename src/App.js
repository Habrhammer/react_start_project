import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />

        <Route
          path="/dialogs/:userId?"
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
            return <LoginPage />;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  // withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

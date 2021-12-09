import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  BrowserRouter,
  Route,
  withRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { withSuspense } from "./hoc/withSuspense";
import store from "./redux/redux-store";
import Dialog from "./components/Dialogs/Dialog";
import DialogContainer from "./components/Dialogs/DialogContainer";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    console.log("Some error occured");
    //console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
          <Route
            path="/dialogs/:userId?"
            render={withSuspense(DialogsContainer)}
          />
          <Route
            path="/dialog/:userId?/messages"
            render={() => {
              return <DialogContainer />;
            }}
          />
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
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
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;

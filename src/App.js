import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
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
import {withSuspense} from "./hoc/withSuspense";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
          render={withSuspense(DialogsContainer)
          }
        />
        <Route
          path="/profile/:userId?"
          render={withSuspense(ProfileContainer)
          }
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


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);



const SocialNetworkApp = (props) => {
  return <BrowserRouter>
       <Provider store={store}>
           <AppContainer />
       </Provider>
   </BrowserRouter>
}

export default SocialNetworkApp;
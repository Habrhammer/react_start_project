import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {

  return (
    <header className={classes.header}>
      <img
        src="https://api.freelogodesign.org/files/fe74caeb24bf4672bf18b587a265139e/thumb/logo_200x200.png?v=0"
        alt=""
      />
      <div className={classes.loginBlock}>
      { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
}

export default Header;

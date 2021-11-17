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
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.header_wrapper}>
        <div className={classes.logo}>Social Network</div>
        <div className={classes.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login} - <button onClick={props.logout}>Log out</button>{" "}
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

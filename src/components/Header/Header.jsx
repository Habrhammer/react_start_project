import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  console.log(props);
  return (
    <header className={classes.header}>
      <div className={classes.header_wrapper}>
        <div className={classes.logo}>Social Network</div>
        <div className={classes.loginBlock}>
          {props.isAuth ? (
            <div className={classes.button_container}>
              <div className={classes.username}>{props.login} </div> <button className={classes.button} onClick={props.logout}>Выйти</button>{" "}
            </div>
          ) : (
            <NavLink to={"/login"}>Авторизоваться</NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

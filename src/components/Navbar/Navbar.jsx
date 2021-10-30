import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Home</NavLink>
        </li>
        <li className={classes.item}>
          
          <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
        </li>
        <li className={classes.item}>
          <a href="#">News</a>
        </li>
        <li className={classes.item}>
          <a href="#">Music</a>
        </li>
        <li className={classes.item}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

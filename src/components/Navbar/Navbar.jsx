import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <a href="/profile">Profile</a>
        </li>
        <li className={classes.item}>
          <a href="/dialogs">Message</a>
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

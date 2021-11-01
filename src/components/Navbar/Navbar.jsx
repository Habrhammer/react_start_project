import React from "react";
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";
import classes from "./Navbar.module.css";

function Navbar(props) {
  return (
    <nav className={classes.nav}>
      <Menu/>
      <Friends appData={props.appData}/>  
    </nav>
  );
}
export default Navbar;

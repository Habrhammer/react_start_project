import React from "react";
// import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";
import classes from "./Sidebar.module.css";

function Sidebar(props) {
 
  return (
    <nav className={classes.nav}>
      <Menu/>
      {/* <Friends store={props.store}/>   */}
    </nav>
  );
}
export default Sidebar;

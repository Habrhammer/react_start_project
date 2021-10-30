import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css"

function DialogItem(props) {
   let path = `/dialogs/${props.id}`;
   return (
     <NavLink to={path} className={`${classes.dialog} ${classes.active}`}>
       {props.name}
     </NavLink>
   );
 }

 export default DialogItem;
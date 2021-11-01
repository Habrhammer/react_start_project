import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css"

function DialogItem(props) {
   let path = `/dialogs/${props.id}`;
   return (
     <div>
      
       <NavLink to={path} className={`${classes.dialog} ${classes.active}`}>
         <img src={props.avatar} alt=""/>{props.name}
       </NavLink>
     </div>
   );
 }

 export default DialogItem;
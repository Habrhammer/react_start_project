import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";
import avatar from "./../../../assets/images/user.png"

function DialogItem(props) {

 function getUserMessages(){
  props.getUserMessages(props.id)
 }
  return (
    <div>
      <NavLink onClick={getUserMessages} to={`/dialogs/${props.id}/messages`} className={`${classes.dialog} ${classes.active}`}>
        {<img src={props.avatar} alt="" /> && <img src={avatar} alt="" />}
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;

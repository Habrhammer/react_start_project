import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";
import avatar from "./../../../assets/images/user.png";

function DialogItem(props) {
  let date = new Date(props.lastDialogActivityDate).toLocaleString("ru", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  let userAvatar = props.photos ? props.photos : avatar;

  return (
    <div className={classes.dialog_wrapper} key={props.id}>
      <div className={classes.dialog_content}>
        <NavLink
          to={`/dialog/${props.id}/messages`}
          className={`${classes.dialog} ${classes.active}`}
        >
          <div className={classes.dialog_info}>
            {<img src={userAvatar} alt="" />}
            <div className={classes.username}>{props.name}</div>
            <div className={classes.activitydate}>{date}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default DialogItem;

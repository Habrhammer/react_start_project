import React from "react";
import classes from "./Message.module.css";
import avatar from "../../../assets/images/avatar.webp";
function Message(props) {
  console.log(props);
  let date = new Date(props.addedAt).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className={classes.message}>
      <div className={classes.message_content}>
        <div className={classes.image_container}>
          <img src={avatar} alt="" />
        </div>
        <div className={classes.message_info}>
          <div className={classes.username}>{props.senderName}</div>
          <div className={classes.date}>{date}</div>
          <div className={classes.text}>{props.message}</div>
        </div>
        
      </div>
    </div>
  );
}

export default Message;

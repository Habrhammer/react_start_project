import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import { Redirect, Route, Router } from "react-router-dom";


function Dialogs(props) {
  let state = props.dialogsPage;
  let currentUserId = props.match.params.userId;
  function addNewMessage(values) {
    props.sendMessage(currentUserId, values);
  }

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes["dialog-items"]}>
        {state.dialogs.map((el) => {
          return (
            <DialogItem
              getUserMessages={props.getUserMessages}
              name={el.userName}
              id={el.id}
              avatar={el.avatar}
              key={el.id}
            />
          );
        })}
      </div>
    </div>
  );
}



export default Dialogs;

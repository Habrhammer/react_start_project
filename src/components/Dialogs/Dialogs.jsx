import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import { Redirect, Route, Router } from "react-router-dom";

function Dialogs(props) {
  let state = props.dialogsPage;

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.content}>
      <div className={classes.dialogs_content}>
          {state.dialogs.map((el) => {
            console.log(el);
            return (
              <DialogItem
                name={el.userName}
                id={el.id}
                photos={el.photos.small}
                key={el.id}
                lastDialogActivityDate={el.lastDialogActivityDate}
              />
            );
          })}
        
      </div>
    </div>
  );
}

export default Dialogs;

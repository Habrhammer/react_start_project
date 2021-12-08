import React from "react";
import classes from "./Dialog.module.css";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { Redirect } from "react-router";

function Dialog({ state, ...props }) {
  function addNewMessageHandler(value) {
    props.sendMessage(props.match.params.userId, value);
    
  }

  return (
    <div className={classes.content}>
      <div className={classes.messages}>
        {state.messages.map((el) => {
          console.log(el);
          return (
            <Message senderName={el.senderName} message={el.body} addedAt={el.addedAt} key={el.id} />
          );
        })}
        <div className={classes.form_wrapper}>
          <div className={classes.form_container}>
            <AddMessageForm onSubmit={addNewMessageHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;

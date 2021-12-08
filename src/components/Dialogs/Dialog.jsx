import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

function Dialog({ state, ...props }) {
  function addNewMessageHandler(value) {
    props.sendMessage(props.match.params.userId, value);
  }

  return (
    <div className={classes.messages}>
      {state.messages.map((el) => {
        console.log(el);
        return (
          <Message senderName={el.senderName} message={el.body} key={el.id} />
        );
      })}
      <div>
        <AddMessageForm onSubmit={addNewMessageHandler} />
      </div>
    </div>
  );
}

export default Dialog;

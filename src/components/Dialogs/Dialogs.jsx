import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

function Dialogs(props) {
  let newMessageElement = React.createRef();
  let state = props.dialogsPage;

  function addMessage() {
    props.sendMessage();
  }
  function onMessageChange() {
    props.updateNewMessageBody(newMessageElement.current.value);
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes["dialog-items"]}>
        {state.dialogs.map((el) => {
          return (
            <DialogItem
              name={el.name}
              id={el.id}
              avatar={el.avatar}
              key={el.id}
            />
          );
        })}
      </div>
      <div className={classes.messages}>
        {state.messages.map((el) => {
          return <Message message={el.message} key={el.id} />;
        })}
        <div>
          <textarea
            onChange={onMessageChange}
            cols="100"
            rows="5"
            ref={newMessageElement}
            value={state.newMessageText}
          ></textarea>
          <button onClick={addMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;

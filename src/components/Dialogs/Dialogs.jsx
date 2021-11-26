import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

function Dialogs(props) {

  let state = props.dialogsPage;

  function addNewMessage(values) {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to={"/login"} /> ;
  
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
          {/* <textarea
            onChange={onMessageChange}
            cols="100"
            rows="5"
            ref={newMessageElement}
            value={state.newMessageText}
          ></textarea>
          <button onClick={addMessage}>Отправить</button> */}
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}




export default Dialogs;

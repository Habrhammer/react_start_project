import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {Redirect} from "react-router-dom";
// import { useParams } from "react-router";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


function Dialogs(props) {
 
  let state = props.dialogsPage;
  let currentUserId = props.match.params.userId

  function addNewMessage(values) {
    props.sendMessage(currentUserId,values);
  }

  if (!props.isAuth) return <Redirect to={"/login"} /> ;
  
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
      <div className={classes.messages}>
        {state.messages.map((el) => {
          console.log(el);
          return <Message senderName={el.senderName} message={el.body} key={el.id} />;
        })}
        <div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}




export default Dialogs;

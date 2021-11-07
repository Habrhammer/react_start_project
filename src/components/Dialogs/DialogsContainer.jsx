import React from "react";


import {
  sendMessageCreator,
  updateMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
 
  let state = props.store.getState();

  function addMessage() {
   
    props.dispatch(sendMessageCreator());
  }
  function onMessageChange(text) {
    
    props.dispatch(updateMessageTextCreator(text));
  }

  return (
    <Dialogs
      state={state.dialogsPage}
      addMessage={addMessage}
      onMessageChange={onMessageChange}
    />
  );
}

export default DialogsContainer;

import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import { sendMessageCreator, updateMessageTextCreator } from "../../state";

function Dialogs(props) {
  let newMessageElement = React.createRef();
  function addMessage() {
    props.dispatch(sendMessageCreator());
  }
  function onMessageChange() {
    props.dispatch(updateMessageTextCreator(newMessageElement.current.value));
  }
  console.log(props);
  return (
    <div className={classes.dialogs}>
      <div className={classes["dialog-items"]}>
        {props.appData.dialogsPage.dialogs.map((el) => {
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
        {props.appData.dialogsPage.messages.map((el) => {
          return <Message message={el.message} key={el.id} />;
        })}
        <div>
          <textarea
            onChange={onMessageChange}
            cols="100"
            rows="5"
            ref={newMessageElement}
            value={props.appData.dialogsPage.newMessageText}
          ></textarea>
          <button onClick={addMessage}>Отправить</button>
        </div>
        {/* 
        <div className={classes.message}>
          <img
            src="https://kuda-mo.ru/image/510/510/uploads/bdd625509a79d3b1cebf93eaceea0029.jpeg"
            alt=""
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          similique facilis hic, molestiae nostrum iure.
        </div> */}
      </div>
    </div>
  );
}

export default Dialogs;

import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx"
import Message from "./Message/Message.jsx"

function Dialogs(props) {


  return (
    <div className={classes.dialogs}>
      <div className={classes["dialog-items"]}>
        {props.appData.dialogsData.map((el) => {
          return <DialogItem name={el.name} id={el.id} avatar={el.avatar} key={el.id} />;
        })}
      </div>
      <div className={classes.messages}>
        {props.appData.messageData.map((el) => {
          return <Message message={el.message} key={el.id} />;
        })}

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

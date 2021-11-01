import React from "react";
import classes from "./Message.module.css";


function Message(props) {
   return (
     <div className={classes.message}>
       <img
         src={"https://kuda-mo.ru/image/510/510/uploads/bdd625509a79d3b1cebf93eaceea0029.jpeg"}
         alt=""
       />
       {props.message}
     </div>
   );
 }

 export default Message;
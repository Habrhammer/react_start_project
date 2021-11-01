import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";

function Friends(props){
  
   return (
      <div>
         <h3>Friends</h3>
         <ul className={classes.friendList}>
         {props.appData.navbarData.friends.map(el=>{
           return ( <li className={classes.friendItem} key={el.id}>
             <NavLink to="/profile" > <img src={el.avatar} alt=""/>{el.name} </NavLink>
           </li>)
         })}
         
         </ul>
      </div>
   );
}

export default Friends;
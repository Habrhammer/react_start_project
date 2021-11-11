import React from "react";
import classes from "./ProfileInfo.module.css";
import screenImage from "./../../../assets/images/screen.jpg"

function ProfileInfo(props) {
  return (
    <div>
       <div className={classes.image_wrapper}>
         <img
           className={classes.img}
           src={screenImage}
           alt=""
         />
       </div>
       <div>ava+description</div>
    </div>
  );
}

export default ProfileInfo;

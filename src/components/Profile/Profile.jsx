import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts appData={props.appData} dispatch={props.dispatch}/>
    </div>
  );
}

export default Profile;

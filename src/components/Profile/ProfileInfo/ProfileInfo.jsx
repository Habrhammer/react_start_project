import React from "react";
import classes from "./ProfileInfo.module.css";
import screenImage from "./../../../assets/images/screen.jpg";
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.image_wrapper}>
        <img className={classes.img} src={screenImage} alt="" />
      </div>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large} />
      </div>
    </div>
  );
}

export default ProfileInfo;

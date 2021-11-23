import React from "react";
import classes from "./ProfileInfo.module.css";
import screenImage from "./../../../assets/images/screen.jpg";
import userPhoto from "./../../../assets/images/user.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

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
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
        />
      </div>
     <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
}

export default ProfileInfo;

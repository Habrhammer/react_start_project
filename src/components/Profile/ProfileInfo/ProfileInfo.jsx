import React from "react";
import classes from "./ProfileInfo.module.css";
import screenImage from "./../../../assets/images/screen.jpg";
import userPhoto from "./../../../assets/images/user.png";
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

function ProfileInfo({profile, status, updateStatus}) {
  if (!profile) {
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
            profile.photos.large != null
              ? profile.photos.large
              : userPhoto
          }
        />
      </div>
     <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
  );
}

export default ProfileInfo;

import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
// import screenImage from "./../../../assets/images/screen.jpg";
import userPhoto from "./../../../assets/images/user.png";
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={classes.info_wrapper}>
      <div className={classes.avatar}>
        <img
          src={profile.photos.large != null ? profile.photos.large : userPhoto}
        />
        {isOwner && (
          <div className={classes.file_upload}>
            <input
              id="file-upload"
              type={"file"}
              onChange={onMainPhotoSelected}
            />
            <label htmlFor="file-upload">
              <span>Загрузить фото</span>
            </label>
          </div>
        )}
      </div>

      <div className={classes.wrapper}>
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
          />
        )}
      </div>
    </div>
  );
}

const ProfileData = ({
  profile,
  isOwner,
  goToEditMode,
  status,
  updateStatus,
}) => {
  return (
    <div className={classes.info}>
      <div className={classes.profile_name}>
        <h1>{profile.fullName}</h1>
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <hr />
      <div>
        <h3>Looking for a job</h3> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <h3>My professional skills</h3> {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <h3>About me</h3> {profile.aboutMe}
      </div>
      <div className={classes.profile_info_full}>
        <div className={classes.profile_info_block}>
          <div className={classes.profile_info_header}>
            <h2>Личная информация</h2>
          </div>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
      {isOwner && (
        <div className={classes.button_edit}>
          <button onClick={goToEditMode}>Редактировать профиль</button>
        </div>
      )}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <h3>{contactTitle}</h3> {contactValue}
    </div>
  );
};

export default ProfileInfo;

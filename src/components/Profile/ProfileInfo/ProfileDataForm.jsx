import React from "react";
import classes from "./ProfileInfo.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import classNames from "classnames";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
 
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>

      <div>
        <b>My professional skills</b>:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me</b>:{createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <>Contacts</>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={classes.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
      <div className={classes.editMode_button}>
        <button>Сохранить изменения</button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;

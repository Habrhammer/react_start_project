import React, { useEffect, useState } from "react";
import classes from "./../ProfileInfo/ProfileInfo.module.css"
const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);


  useEffect(()=>{
     setStatus(props.status);

  },[props.status])

  function activateEditMode() {
    setEditMode(true);
  }

  function deactivateEditMode() {
    setEditMode(false);
    props.updateStatus(status)
  }

  function onStatusChange(e) {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {editMode ? (
        <div className="input">
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
            autoFocus={true}
            type="text"
          />
        </div>
      ) : (
        <div onDoubleClick={activateEditMode} className={classes.status}>
          {props.status || "нет статуса"}
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

import React, { useEffect, useState } from "react";

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
        <div onDoubleClick={activateEditMode} className="status">
          {props.status || "----------------"}
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

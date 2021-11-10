import React from "react";
import classes from "./Users.module.css";

function Users(props) {
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div className={classes.wrapper} key={u.id}>
            <div className={classes.content} >
              <div className={classes.left_container}>
                <div>
                  <img src={u.userPhoto} alt="" className={classes.userPhoto} />
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.follow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div className={classes.middle_container}>
                <div className={classes.fullName}>{u.fullName}</div>
                <div>{u.status}</div>
              </div>
              <div className={classes.right_container}>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;

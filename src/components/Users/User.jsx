import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.webp";
import { NavLink } from "react-router-dom";


function User({ user, isDisabled, unfollow, follow }) {
  return (
    <div className={classes.user_wrapper} key={user.id}>
      <div className={classes.user_container}>
        <div className={classes.left_container}>
          <div className={classes.image_container}>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={classes.userPhoto}
              />
            </NavLink>
          </div>
          <div className={classes.middle_container}>
          <div className={classes.fullName}>{user.name}</div>
          <div>{user.status}</div>
        </div>
          <div className={classes.button_container}>
            {user.followed ? (
              <button
                disabled={isDisabled.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Отписаться
              </button>
            ) : (
              <button
                disabled={isDisabled.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Подписаться
              </button>
            )}
          </div>
        </div>
     
        <div className={classes.right_container}>
          {/* <div>{user.location.country}</div>
              <div>{user.location.city}</div> */}
        </div>
      </div>
    </div>
  );
}

export default User;

import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png";
import { NavLink } from "react-router-dom";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div className={classes.wrapper} key={u.id}>
            <div className={classes.content}>
              <div className={classes.left_container}>
                <div>
                  <NavLink to={"/profile/" + u.id}>
                    {/* <img
                      src={u.userPhoto ? u.userPhoto : userPhoto}
                      alt=""
                      className={classes.userPhoto}
                    /> */}
                    <img
                      src={u.photos.small != null ? u.photos.small : userPhoto}
                      className={classes.userPhoto}
                    />
                  </NavLink>
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
                <div className={classes.fullName}>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div className={classes.right_container}>
                {/* <div>{u.location.country}</div>
                  <div>{u.location.city}</div> */}
              </div>
            </div>
          </div>
        );
      })}
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? classes.selectedPage : null}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Users;

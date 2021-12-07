import React from "react";
import classes from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

function Users({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) {
  /*   let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  } */
  return (
    <div className={classes.content}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />

      {users.map((u) => {
        return (
          <User
            user={u}
            isDisabled={props.isDisabled}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        );
      })}
      <div>
        {/*  {pages.map((p) => {
          return (
            <span
              key={p}
              className={currentPage === p ? classes.selectedPage : null}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })} */}
      </div>
    </div>
  );
}

export default Users;

import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../../assets/images/avatar.webp"

function Post(props) {
  return (
    <div className={classes.article}>
      <div className={classes.item}>
        <img
          src={avatar}
          alt=""
        />
        <div className={classes.text}>{props.message}</div>
        {/* <span className={classes.like}>Like {props.likes}</span> */}
      </div>
    </div>
  );
}

export default Post;

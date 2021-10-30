import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {

 let postData = props.postData;
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name=""></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {postData.map((el) => {
          return <Post message={el.message} likes={el.likes} key={el.id} />;
        })}
      
      </div>
    </div>
  );
}

export default MyPosts;

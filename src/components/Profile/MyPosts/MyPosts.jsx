import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts(){
   return (
     <div>
        <h3>My posts</h3>
         <textarea name=""></textarea>
         <button>Add post</button>
         <div className={classes.posts}>
        <Post/>
      <Post/>
         </div>
     </div>
   );
}

export default MyPosts;
import React from "react";
import classes from "./Post.module.css"

function Post(){
   return (
      <div className={classes.article}>
         <div className={classes.item}>
            <img src="https://kuda-mo.ru/image/510/510/uploads/bdd625509a79d3b1cebf93eaceea0029.jpeg" alt="" /><div className={classes.text}>Post 1</div>
            <span className={classes.like}>Like</span>
         </div>
      </div>
   );
}

export default Post;
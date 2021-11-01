import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addMessage(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} name=""></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {props.appData.postData.map((el) => {
          return <Post message={el.message} likes={el.likes} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default MyPosts;

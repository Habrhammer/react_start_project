import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  console.log(props);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  function onPostChange() {
    debugger
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            cols="100"
            rows="5"
            onChange={onPostChange}
            ref={newPostElement}
            value={props.appData.profilePage.newPostText}
          ></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {props.appData.profilePage.posts.map((el) => {
          return <Post message={el.message} likes={el.likes} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default MyPosts;

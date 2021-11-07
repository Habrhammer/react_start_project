import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



function MyPostsContainer(props) {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  function onPostChange(text) {
    props.store.dispatch(
      updateNewPostTextActionCreator(text)
    );
  }

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;

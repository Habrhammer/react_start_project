import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.input_container}>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post message"}
        />
      </div>
      <div className={classes.button_container}>
        <button>Добавить запись</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

function MyPosts(props) {
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.posts_container}>
      <AddNewPostFormRedux onSubmit={onAddPost} />

      <div className={classes.posts}>
        <div>
          <h3>Мои записи</h3>
        </div>
        {props.posts.map((el) => {
          return <Post message={el.message} likes={el.likes} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default MyPosts;

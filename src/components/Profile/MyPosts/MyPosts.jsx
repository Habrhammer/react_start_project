import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
      <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]} />
      </div>
      <div>
          <button>Add post</button>
      </div>
  </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);



function MyPosts(props) {
  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  function onPostChange() {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h3>My posts</h3>
      {/* <div>
        <div>
          <textarea
            cols="100"
            rows="5"
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div> */}
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {props.posts.map((el) => {
          return <Post message={el.message} likes={el.likes} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default MyPosts;

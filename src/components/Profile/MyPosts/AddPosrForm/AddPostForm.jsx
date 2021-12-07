import React from 'react';
import classes from '../AddPostForm.module.css';
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"textarea"} name="postText"/>
                </div>
                <div className={classes.button_container}>
                    <button >Добавить запись</button>
                </div>
            </form>
    )
}

export default reduxForm({form: 'profile-add-post'})(AddPostForm)
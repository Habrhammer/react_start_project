import React from "react";
// import {Field, reduxForm} from "redux-form";
// import {Textarea} from "../../common/FormsControls/FormsControls";
// import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Formik, Form, useField, useFormikContext, Field } from "formik";

// const maxLength50 = maxLengthCreator(50);

function Textarea(props) {
  const { label, name, formik, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
    </div>
  );
}

const AddMessageForm = (props) => {
  const initialValues = {
    email: "",
    message: "",
  };
  const onSubmit = (values) => {
    props.onSubmit(values.message);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <Textarea control="textarea" name="message" formik={formik} />
          <button type="submit">Отправить</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMessageForm;

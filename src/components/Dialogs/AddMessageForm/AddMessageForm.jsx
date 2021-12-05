import React from 'react';
// import {Field, reduxForm} from "redux-form";
// import {Textarea} from "../../common/FormsControls/FormsControls";
// import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Formik, Form, useField, useFormikContext, Field } from "formik";

// const maxLength50 = maxLengthCreator(50);



 function Textarea (props) {
   const { label, name, formik, ...rest } = props
   return (
     <div className='form-control'>
       <label htmlFor={name}>{label}</label>
       <Field as='textarea' id={name} name={name} {...rest} />
     
     </div>
   )
 }
 

const AddMessageForm = (props) => {
/*     return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button>Send222</button>
            </div>
        </form>
    ) */
    const initialValues = {
      email: '',
      message: ''
    }
   //  const validationSchema = Yup.object({
   //    email: Yup.string().required('Required'),
   //    description: Yup.string().required('Required')
   //  })
    const onSubmit = values => {
      props.onSubmit(values.message)
    }
  
    return (
      <Formik
        initialValues={initialValues}
      //   validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
       
            <Textarea
              control='textarea'
              name='message'
              formik={formik}
            />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    )
}


export default AddMessageForm;
// export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
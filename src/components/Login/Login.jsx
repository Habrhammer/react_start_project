import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";
import classes from "./Login.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div className={classes.checkbox}>
        <Field
          component={Input}
          name={"rememberMe"}
          text="Запомнить меня"
          type={"checkbox"}
        />
      </div>

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && (
        <div>
          <Field
            placeholder={"Symbols from image"}
            name={"captcha"}
            validate={[required]}
            component={Input}
          />
        </div>
      )}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div className={classes.button_container}>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  var divStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
  };

  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={classes.content}>
      <div className={classes.login_container}>
        <h1>Авторизация</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />

        <div style={divStyle}>
          <div style={{ fontWeight: "bold", marginBottom: "15px", fontSize: "15px" }}>
            Данные тестового аккаунта:
          </div>
          <div style={{fontStyle: "italic",userSelect: "none"}}>Email:{" "}</div>
          <pre style={{ backgroundColor: "#E5EBF1", padding: "5px",margin: "5px 0" }}>
            free@samuraijs.com
          </pre>{" "}
          <div style={{fontStyle: "italic", userSelect: "none"}}>Password:{" "}</div>
          <pre style={{ backgroundColor: "#E5EBF1", padding: "5px" ,margin: "5px 0"}}>free</pre>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

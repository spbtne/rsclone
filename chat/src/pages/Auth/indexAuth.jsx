import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginForm from "../../modules/LoginForm/indexLoginForm";
import RegistrationForm from "../../modules/RegistrationForm/indexRegistrationForm";

import CheckEmailInfo from "./components/CheckEmailInfo";

import "./Auth.scss";

function Auth() {
  return (
      <section className="auth">
        <div className="auth__content">
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/registration/verify" component={CheckEmailInfo} />
        </div>
      </section>
  );
}

export default Auth;

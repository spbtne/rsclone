import React from "react";
import { Route } from "react-router-dom";

import LoginForm from "../../modules/LoginForm/indexLoginForm";
import RegistrationForm from "../../modules/RegistrationForm/indexRegistrationForm";

import "./Auth.scss";

function Auth() {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route exact path="/registration" component={RegistrationForm} />
      </div>
    </section>
  );
}

export default Auth;
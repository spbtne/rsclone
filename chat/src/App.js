import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { Auth, Home } from "./pages/indexPages.js";

const App = (props) => {
  const { isAuth } = props;

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route
            exact
            path={["/login", "/registration", "/registration/verify"]}
            component={Auth}
          />
          <Route
            path="/"
            render={() => (isAuth ? <Home /> : <Redirect to="/login" />)}
          />
        </Switch>
      </Router>
      <div id='footer'>
<img src="https://rs.school/images/rs_school_js.svg" alt="logo" width="150px"/>
<a href="https://rs.school/js/">RSS School</a>
<span>Chat 2021</span> 
<div className="developers">
    <h3>developed by</h3>
<a href="https://github.com/DreamerAleksey">Dreamer Aleksey</a>
<a href="https://github.com/Voloshin-Sergei">Voloshin Sergei</a>
<a href="https://github.com/spbtne">Nikita Tushin</a>
</div>
    </div>
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);

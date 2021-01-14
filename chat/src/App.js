import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Auth, Home } from "./pages/indexPages.js";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Route exact path={["/", "/login", "/registration"]} component={Auth} />
        <Route exact path={["/im"]} component={Home} />
      </Router>
    </div>
  );
}

export default App;

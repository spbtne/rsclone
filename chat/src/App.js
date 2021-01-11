import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Auth } from "./pages/Home/indexHome";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Auth />
      </Router>
    </div>
  );
}

export default App;

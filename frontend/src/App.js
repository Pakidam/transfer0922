import React from "react";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import { withRouter } from "react-router-dom";
import receiverService from "./services/receiver";

import Rates from "./components/Rates";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("usertoken");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      receiverService.setToken(user.token);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/rates" component={Rates} />
    </div>
  );
};

export default withRouter(App);

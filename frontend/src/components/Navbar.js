import React from "react";
//import LoggedOutNavbar from "./LoggedOutNavbar";
// import LoggedInNavbar from "./LoggedInNavbar";

import Countries from "./Countries";
import { Button, Menu, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoggedInNavbar = props => {
  const logOut = event => {
    event.preventDefault();
    localStorage.removeItem("usertoken");
    props.history.push(`/`);
  };
  return (
    <Grid.Column>
      <Menu size="huge">
        <Menu.Item>Money Transfer</Menu.Item>

        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Countries />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link>Help</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/" onClick={logOut}>
              Log Out
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  );
};

const LoggedOutNavbar = () => {
  return (
    <Grid.Column>
      <Menu size="huge">
        <Menu.Item>Money Transfer</Menu.Item>

        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Countries />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link>Help</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/register">
              <Button primary>Register</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  );
};
const Navbar = () => {
  return <div>{localStorage.usertoken ? LoggedInNavbar : LoggedOutNavbar}</div>;
};

export default Navbar;

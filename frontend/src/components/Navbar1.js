import React from "react";
import Countries from "./Countries";
import { Button, Menu, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LoggedInNavbar from "./LoggedInNavbar";

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
const Navbar1 = () => {
  return (
    <div>
      {localStorage.usertoken ? <LoggedInNavbar /> : <LoggedOutNavbar />}
    </div>
  );
};

export default Navbar1;

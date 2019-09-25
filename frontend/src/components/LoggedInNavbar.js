import React from "react";
import Countries from "./Countries";
import { Button, Menu, Grid } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

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
            <Link to="/">
              <Button onClick={logOut}>Log Out</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  );
};

export default withRouter(LoggedInNavbar);

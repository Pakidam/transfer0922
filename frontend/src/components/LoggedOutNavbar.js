import React from "react";
import Countries from "./Countries";
import { Button, Menu, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const LoggedOutNavbar = () => {
  return (
    <Grid.Column>
      <Menu size="huge">
        <Menu.Item>
          <Link to="/">Money Transfer</Link>
        </Menu.Item>

        <Menu.Item>
          <Countries />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/help">Help</Link>
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

export default withRouter(LoggedOutNavbar);

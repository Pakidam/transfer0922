import React, { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import loginService from "../services/login";
import receiverService from "../services/receiver";
import { withRouter } from "react-router-dom";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const loginSender = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        email,
        password
      });

      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      receiverService.setToken(user.token);
      setUser(user);

      props.history.push(`/rates`);
    } catch (e) {
      return console.log(e, "Wrong credentials");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <h2>Login page</h2>

        <Form size="large" onSubmit={loginSender}>
          <Form.Field>
            <label>Email</label>
            <input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
        <p>
          New To Money Transfer?{" "}
          <Button primary onClick={() => props.history.push(`/register`)}>
            Register
          </Button>
        </p>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Login);

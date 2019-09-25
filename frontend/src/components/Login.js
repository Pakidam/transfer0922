import React, { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import loginService from "../services/login";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedUser, setLoggedUser] = useState(null);

  const loginSender = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        email,
        password
      });
      if (user.status !== 401) {
        props.history.push(`/`);
        localStorage.setItem("usertoken", user);
      }
    } catch (exeption) {
      return console.log("Wrong credentials");
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
      </Grid.Column>
    </Grid>
  );
};
export default Login;

import React, { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import registerService from "../services/register";

const Register = props => {
  /*
  const [inputValues, setInputValues] = useState({
    firstName: "",
    middleName: " ",
    lastName: " ",
    email: " ",
    password: " ",
    dob: " "
  });
*/

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  */

  const createSender = async event => {
    event.preventDefault();
    try {
      const result = await registerService.register({
        firstName,
        middleName,
        lastName,
        dob,
        email,
        password
      });
      if (result.status !== 409) {
        props.history.push(`/login`);
      }
    } catch (exception) {
      return console.log("Wrong credentials");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <h2> Registration page</h2>

        <Form size="large" onSubmit={createSender}>
          <Form.Field>
            <label>First Name</label>
            <input
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Middle Name</label>
            <input
              name="middleName"
              value={middleName}
              onChange={e => setMiddleName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Date of birth</label>
            <input
              name="dob"
              value={dob}
              onChange={e => setDob(e.target.value)}
            />
          </Form.Field>
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
export default Register;

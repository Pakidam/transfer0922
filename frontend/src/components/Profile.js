import React, { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import receiverService from "../services/receiver";
import { withRouter } from "react-router-dom";

const Profile = props => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  const createReceiver = async event => {
    event.preventDefault();

    try {
      const result = await receiverService.create({
        firstName,
        middleName,
        lastName,
        email,
        dob,
        tel,
        address,
        country
      });

      props.history.push(`/login`);
    } catch (exception) {
      return console.log("Wrong credentials");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <h2> Add Receiver</h2>

        <Form size="large" onSubmit={createReceiver}>
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
            <label>Email</label>
            <input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            <label>Mobile Number</label>
            <input
              name="tel"
              value={tel}
              onChange={e => setTel(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <label>Address</label>
            <input
              type="address"
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <label>Country</label>
            <input
              type="country"
              name="country"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </Form.Field>

          <Button type="submit">Add</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Profile);

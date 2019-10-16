import React from "react";
import Countries from "./Countries";
import { Container, Button, Grid } from "semantic-ui-react";

const Landing = props => {
  const landingPage = () => props.history.push(`/rates`);

  return (
    <Grid textAlign="center" style={{ height: "40vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Container textAlign="center">
          <h3>Send to:</h3>
          <Countries />
          <Button basic color="blue" onClick={landingPage}>
            Get started
          </Button>
        </Container>
      </Grid.Column>
    </Grid>
  );
};

export default Landing;

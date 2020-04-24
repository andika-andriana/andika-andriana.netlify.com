import React from "react";
import { Container, Divider, Segment } from "semantic-ui-react";

const Footers = () => {
  return (
    <Container fluid>
      <Divider />
      <Segment inverted textAlign="center">
        <code>&copy; 2020, Andika Andriana.</code>
      </Segment>
    </Container>
  );
};

export default Footers;

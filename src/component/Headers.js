import React from "react";
import { Container, Segment, Icon, Header } from "semantic-ui-react";

const Headers = () => (
  <Container fluid style={{ textAlign: "center" }}>
    <Segment.Group style={{ marginBottom: 10 }}>
      <Segment inverted size="massive" attached="top">
        <Header size="large" style={{ fontFamily: "Dancing Script" }}>
          Assalamualaikum Warahmatullahi Wabarakatuh
        </Header>
      </Segment>
      <Segment attached="bottom">
        <Header as="h6" style={{ fontSize: 12 }}>
          Selamat datang di website saya&nbsp;&nbsp;&nbsp;
          <a
            href="https://andika-andriana.github.io"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "black" }}
          >
            <Icon name="globe" style={{ color: "black", fontSize: 10 }} />
            <u>https://andika-andriana.github.io</u>&nbsp;|&nbsp;
            <u>https://andika-andriana.netlify.com</u>
          </a>
        </Header>
      </Segment>
    </Segment.Group>
  </Container>
);

export default Headers;

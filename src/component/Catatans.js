import React from "react";
import Iframe from "react-iframe";
import { Segment, Label } from "semantic-ui-react";

const Catatans = () => {
  return (
    <Segment>
      <Label attached="bottom" color="green">
        Iframe:&nbsp;
        <a
          href="https://andriana-notes.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://andriana-notes.netlify.com/
        </a>
      </Label>
      <Iframe
        url="https://andriana-notes.netlify.com/"
        width="100%"
        height="800px"
        frameBorder="0"
      />
    </Segment>
  );
};

export default Catatans;

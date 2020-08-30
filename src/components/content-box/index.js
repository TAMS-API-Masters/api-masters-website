import React from "react";
import styled from "styled-components";
import constants from "../../constants";

export default function ContentBox(props) {
  return <Box>{props.children}</Box>;
}

const Box = styled.main`
  background-color: ${constants.BEIGE}95;
    margin: ${constants.STANDARD_LR_MARGIN};
    border-radius: 40px;
    padding: 30px;
    margin-bottom: 20px;
    

  // for testing purposes
  min-height: 800px;
`;

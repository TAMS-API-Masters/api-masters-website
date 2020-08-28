import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import Navigation from "../navigation";
import wood from "./wood.png";
import stamp from './stamp.png';

export default function Layout(props) {
  return (
    <LayoutDiv>
      <BackgroundDiv />
      <Navigation />
      <ContentFit>{props.children}</ContentFit>
      <Footer>
        <span style={{
          color: "white"
        }}>
          © <sub style={{fontSize: "60%"}}>(jk)</sub> <strong>Nathaniel Brown</strong> and <strong>Sridhar Nandigam</strong>, 2020
        </span>
        <StampImg src={stamp} />
      </Footer>
    </LayoutDiv>
  );
}

const LayoutDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Footer = styled.footer`
  width: 100%;
  height: 90px;
  background-color: rgb(0,0,0,0.4);
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: auto;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
`

const StampImg = styled.img`
  transform: rotate(15deg);
  width: 150px;
`

const BackgroundDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${wood});
`;

const ContentFit = styled.div`
  max-width: ${constants.MAIN_CONTAINER_WIDTH};
  width: 100%;
  margin: 0 auto;
`;

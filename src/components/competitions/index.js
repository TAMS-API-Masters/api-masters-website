import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import ContentBox from "../content-box";
import competitions from "./competitions";
import DividingLine from "../dividing-line";

export default function Competitions(props) {
  return (
    <ContentBox>
      {competitions.map((competition, index) => {
        const { title, subtitle, description, image, api_name } = competition;
        return (
          <Competition
            index={index}
            title={title}
            subtitle={subtitle}
            description={description}
            image={image}
            api_name={api_name}
          />
        );
      })}
    </ContentBox>
  );
}

function Competition(props) {
  const { title, subtitle, description, image, api_name, index } = props;

  return (
    <div>
      <CompDiv>
        <Content
          style={
            index % 2 !== 0
              ? {
                  order: "1",
                }
              : {}
          }
        >
          <TitleDiv>
            <h1>{title}:</h1>
            <h2>{subtitle}</h2>
          </TitleDiv>
          <div>{description}</div>
        </Content>
        <ImgDiv>
          <img
            src={image}
            style={{
              height: "160px",
            }}
          />
          <strong
            style={{
              marginTop: "20px",
            }}
          >
            Featured API:
          </strong>
          {api_name}
        </ImgDiv>
      </CompDiv>
      <DividingLine />
    </div>
  );
}

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 20px;

  h1 {
    font-size: 40px;
    margin: 0;
    margin-right: 10px;
  }

  h2 {
    font-weight: 400;
    margin: 0;
    margin-bottom: 4px;
  }
`;

const ImgDiv = styled.div`
  margin: 30px 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  @media screen and (max-width: ${constants.MOBILE_BREAKPOINT}) {
    order: 0 !important;
  }
`;

const CompDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 50px;
  margin-top: 30px;

  @media screen and (max-width: ${constants.MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`;

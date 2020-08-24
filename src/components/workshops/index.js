import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import ContentBox from "../content-box";
import DividingLine from '../dividing-line';
import workshops from "./workshops";
import slides from "./slides.png";

export default function Workshops(props) {
  return (
    <ContentBox>
        {workshops.length === 0 && <div>
            <h1>No Workshops Yet!</h1>
            <p>Workshops will be coming soon—stay tuned!</p>
            </div>
        }
      {workshops.map((workshop, index) => {
        return (
          <Workshop
            index={index}
            title={workshop.title}
            subtitle={workshop.subtitle}
            description={workshop.description}
            link={workshop.link}
          />
        );
      })}
    </ContentBox>
  );
}

function Workshop(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const description = props.description;
  const link = props.link;
  const index = props.index;

  return (
    <div>
      <WorkshopDiv>
          <SlideDiv style={index % 2 == 0 ? {order: "2"} : {}}>
        <a href={link}>
          <SlideImg src={slides} />
        </a>
        <a href={link}>
            Access our Slides!
        </a>
        </SlideDiv>
        <div>
          <h2 style={{
              margin: "0px 10px",
              marginLeft: "0",
              fontSize: "40px"
          }}>{title}</h2>
          <h3 style={{
              margin: "0px",
              marginBottom: "20px",
              fontWeight: "300",
              fontSize: "22px"
          }}>{subtitle}</h3>
          <div>{description}</div>
        </div>
      </WorkshopDiv>
      <DividingLine />
    </div>
  );
}

const SlideDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;

    a {
        color: #F6BA14;
    }

    @media screen and (max-width: ${constants.MOBILE_BREAKPOINT}) {
        order: 0 !important;
    }
`

const SlideImg = styled.img`
  width: 200px;
`;

const WorkshopDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: ${constants.MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`;

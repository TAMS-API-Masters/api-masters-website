import React from "react";
import styled from "styled-components";
import BigButton from "../big-button";
import constants from "../../constants";
import discord from "./discord.png";
import facebook from "./facebook.png";

export default function Home(props) {
  return (
    <HomeDiv>
      <BigButton
        text={"Join our Discord"}
        color={constants.DISCORD_BLUE}
        image={discord}
        link={"http://www.discord.com"}
      >
			<Asterisk href={""}>*</Asterisk> 
      </BigButton>
      <BigButton
        text={"Join our Facebook"}
        color={constants.FACEBOOK_BLUE}
        image={facebook}
        link={"http://www.facebook.com"}
        style={{ marginTop: "40px" }}
      />
      
			<VideoLink
			data='https://www.youtube.com/embed/t8Oe8Bej7ck' 
			width='560px' 
			height='315px' 
			frameborder="0"
			title="video"
			allowfullscreen
			style={{marginTop: "70px"}}
			/>
      <Message>
        * <strong>Note:</strong> We will not and cannot be held responsible for
        the effects of joining these groups, including but not limited to a
        drastic increase in your programming abilities, an experience of intense
        joy and satisfaction after seeing the effects of your hard work, and/or
        the receival of a limited-edition ninja duck as a competition prize.
      </Message>
    </HomeDiv>
  );
}

const Asterisk = styled.a`
  color: white;
  position: absolute;
  font-size: 120px;
  font-weight: 100;
  top: -40px;
  right: -40px;
  transform: rotate(20deg);
  transition: transform 2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: ${constants.MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const Message = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  color: white;
`;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`;

//Added media query using styled components
const VideoLink = styled.object`
@media screen and (max-width: 767px) {
	width: 373px;
	height: 210px;
}
	
`;

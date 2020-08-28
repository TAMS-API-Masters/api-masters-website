import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import constants from "../../constants";
import duck from "./duck.png";
import name from "./name.png";
import { HiMenu } from "react-icons/hi";

export default function Navigation(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const isSmall = useMediaQuery({
    query: `(max-width: ${constants.MOBILE_BREAKPOINT})`,
  });

  return (
    <NavNav>
      <Top>
        {!isSmall && <DuckImg src={duck} alt={"Quackhead"} />}
        <Link to="/">
        <NameImg
          src={name}
          alt={"API Masters"}
          style={isSmall ? { margin: "0", marginLeft: "15px", marginTop: "8px" } : {}}
        />
        </Link>
        {isSmall && <MenuButton onClick={toggleDropdown} />}
      </Top>
      {!isSmall && <Buttons currentPath={currentPath} />}
      {isSmall && showDropdown && <DropdownMenu currentPath={currentPath} setShowDropdown={setShowDropdown}/>}
    </NavNav>
  );
}

const MenuButton = styled(HiMenu)`
  color: white;
  height: 80px;
  width: 80px;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Top = styled.div`
  display: block;
`;

const DuckImg = styled.img`
  display: block;
  width: 20%;
  max-width: 250px;
  position: absolute;
  left: 20px;
  top: 20px;
`;

const NameImg = styled.img`
  display: block;
  width: 50%;
  max-width: 600px;
  margin: 0 auto;
`;

const NavNav = styled.nav`
  width: 100%;
  position: relative;
  margin-top: 10px;

  margin-bottom: 50px;
`;

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Posts",
    link: "/posts",
  },
  {
    name: "Competitions",
    link: "/competitions",
  },
  {
    name: "GitHub",
    link: "/github",
  },
  {
    name: "Workshops",
    link: "/workshops",
  },
];

function Buttons(props) {
  const currentPath = props.currentPath;

  return (
    <ButtonsDiv>
      {links.map((linkobj, index) => {
        return (
          <ButtonLink
            to={linkobj.link}
            key={index}
            active={
              linkobj.link != "/"
                ? currentPath.startsWith(linkobj.link)
                : currentPath === "/"
            }
            // A hack (*quack*)
            style={
                index == (links.length - 1) ? {marginRight: "10px"} :
                (index == 0 ? {marginLeft: "10px"} : {})
            }
          >
            {linkobj.name}
          </ButtonLink>
        );
      })}
    </ButtonsDiv>
  );
}

const ButtonLink = styled(Link)`
  background-color: ${(props) =>
    props.active ? constants.DARK_BROWN : constants.BEIGE};
  padding: 10px 25px;
  border-radius: 30px;
  z-index: 1;

  display: flex;
  justify-content: center;
  min-width: 100px;

  text-decoration: none;
  color: ${(props) => (props.active ? constants.BEIGE : constants.DARK_BROWN)};
  font-weight: 700;
  font-size: 22px;

  ${(props) =>
    props.active &&
    `
  -webkit-box-shadow: 0px 10px 9px 0px rgba(0,0,0,0.37);
  -moz-box-shadow: 0px 10px 9px 0px rgba(0,0,0,0.37);
  box-shadow: 0px 10px 9px 0px rgba(0,0,0,0.37);
  `}

  &:hover {
      filter: brightness(0.9);
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  max-width: ${constants.MAIN_CONTAINER_WIDTH};
  justify-content: space-between;
`;

function DropdownMenu(props) {
  const currentPath = props.currentPath;

  return (
    <DropdownDiv>
      {links.map((linkobj, index) => {
        return (
          <LinkElement
            index={index}
            to={linkobj.link}
            active={
              linkobj.link != "/"
                ? currentPath.startsWith(linkobj.link)
                : currentPath === "/"
            }
            onClick={() => props.setShowDropdown(false)}
            style={(index === links.length - 1) ? { borderBottom: "none" } : {}}
          >
            {linkobj.name}
          </LinkElement>
        );
      })}
    </DropdownDiv>
  );
}

const LinkElement = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: ${constants.DARK_BROWN};
  font-weight: ${(props) => (props.active ? "700" : "400")};
  font-size: 25px;
  margin-top: 8px;
  margin-bottom: 5px;

  border-bottom: 2px solid ${constants.DARK_BROWN};
`;

const DropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  background-color: ${constants.BEIGE};
`;

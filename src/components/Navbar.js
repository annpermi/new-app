import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation, NavLink } from "react-router-dom";
import { data } from "../data/data";
import { Button } from "./Button";
import { COLORS } from "../style/variables";
import Bars from "../images/bars.svg";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 1050;
  position: fixed;
  width: 100%;
`;

const LinkStyled = css`
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  /* text-shadow: 0px 0px 20px rgb(0 0 0 / 40%); */
  &:hover {
    border-bottom: 1px solid ${COLORS.white};
  }
  &.active {
    border-bottom: 1px solid ${COLORS.white};
  }
`;

const Logo = styled(Link)`
  ${LinkStyled}
  font-style: italic;
  font-size: 1.25rem;
  &:hover {
    border-bottom: none;
  }
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-70%, 60%);
    color: ${COLORS.white};
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(NavLink)`
  ${LinkStyled}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  // const [isActive, setIsActive] = useState(true);
  const location = useLocation();

  const changeBackground = () => {
    // 60 height of the navbar
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? `${COLORS.navy}` : "transparent",
    transition: "0.4s",
  };

  return (
    <Nav style={style}>
      <Logo to="/">AlanBurney</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {data.menuData.map((item) => (
          <NavMenuLinks to={item.link} key={item.id}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;

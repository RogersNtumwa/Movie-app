import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  top: 0;
  z-index: 10;
  font-size: 1.6rem;
  position: sticky;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2.4rem;
  z-index: 1;
  max-width: 1100px;
`;

export const Navlogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.6rem;
`;

export const MobilIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const Navmenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 20px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const Navbtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

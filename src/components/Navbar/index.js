import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobilIcon,
  Navmenu,
  NavLinks,
  NavItem,
  Navbtn,
  NavbtnLink,
} from "./Navbar.elements";

const Navbar = ({ toggle }) => {
  return (
    <Fragment>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">Denjo</Navlogo>
          <MobilIcon onClick={toggle}>
            <FaBars />
          </MobilIcon>
          <Navmenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Shop">Movies</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">SignUp</NavLinks>
            </NavItem>
          </Navmenu>
          <Navbtn>
            <NavbtnLink to="/signin">Sign in</NavbtnLink>
          </Navbtn>
        </NavbarContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;

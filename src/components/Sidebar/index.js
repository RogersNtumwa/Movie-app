import React from "react";
import {
  SidebarCOntaier,
  Icon,
  Closeicon,
  SidebarRoute,
  Sidebarbtnwrap,
  SidebarLink,
  Sidebarwrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarCOntaier isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <Closeicon />
      </Icon>
      <Sidebarwrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="products" onClick={toggle}>
            Movies
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <Sidebarbtnwrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </Sidebarbtnwrap>
      </Sidebarwrapper>
    </SidebarCOntaier>
  );
};

export default Sidebar;

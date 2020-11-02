import React, { useState } from "react";
import { Nav, Ul, Navlink, Navlogo, Mobmenu } from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Nav>
      <Navlogo>ZondiYaka</Navlogo>
      <Mobmenu onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </Mobmenu>
      <Ul onClick={handleClick} click={click}>
        <Navlink>Home</Navlink>
        <Navlink>Genre</Navlink>
        <Navlink>Login</Navlink>
        <Navlink>SignUp</Navlink>
      </Ul>
    </Nav>
  );
};

export default Navbar;

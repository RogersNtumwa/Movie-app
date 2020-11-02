import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  background-color: #ff0000;
  width: 100%;
  height: 4rem;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  z-index: 1;
`;
export const Navlogo = styled(Link)`
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -15px;
    width: 50%;
    height: 90vh;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #000;
  }
`;

export const Navlink = styled(Link)`
  padding: 2rem;
  color: #fff;
  text-decoration: none;
`;

export const Mobmenu = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 960px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

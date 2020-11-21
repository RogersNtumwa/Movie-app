import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const LandingContainer = styled.div`
  background-color: #0c0c0c;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  z-index: 1;
  height: 80vh;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: green;
    z-index: 2;
    opacity: 0.5;
  }
`;

// add :before styles

export const LandingBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #232a34;
`;

export const LandingContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandlingH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Landingbtnwrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Arrowforward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 80x;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 80x;
`;

import styled from "styled-components";

export const Landing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 700px) {
    height: 50vh;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  position: absolute;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;

export const Headertext = styled.h1`
  font-size: 4rem;
  align-self: center;

  @media screen and (max-width: 750px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Label = styled.button`
  font-size: 2rem;
  height: 3rem;
  width: 15rem;
  align-self: center;
  border-radius: 2rem;
  cursor: pointer;
  outline: none;

  &::focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    width: 8rem;
    transform: translateY(-38%);
  }
`;
export const Backgroundvideo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const Video = styled.video.attrs((props) => ({
  autoplay: true,
  loop: true,
  muted: true,
}))`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  overflow-x: hidden;
`;

import React, { useState } from "react";
import { Button } from "../../components/ButtonElement";
import {
  LandingBG,
  LandingContainer,
  VideoBG,
  ArrowRight,
  Arrowforward,
  LandingContent,
  Landingbtnwrapper,
  LandlingH1,
} from "./LandingElementes";
import Video from "../../video/funtech.mp4";

const Landing = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };
  return (
    <LandingContainer>
      <LandingBG>
        <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
      </LandingBG>
      <LandingContent>
        <LandlingH1>Welcome to Denjo Hearts</LandlingH1>
        <Landingbtnwrapper>
          <Button
            to="movies"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Explore More {hover ? <Arrowforward /> : <ArrowRight />}
          </Button>
        </Landingbtnwrapper>
      </LandingContent>
    </LandingContainer>
  );
};

export default Landing;

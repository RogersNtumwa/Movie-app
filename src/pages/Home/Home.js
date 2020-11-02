import React, { Fragment } from "react";
import movie from "./video/funtech.mp4";
import {
  Landing,
  Label,
  Headertext,
  Header,
  Backgroundvideo,
  Video,
} from "./Home.elements";

const Home = () => {
  return (
    <Fragment>
      <Landing>
        <Backgroundvideo>
          <Video autoPlay loop muted>
            <source src={movie} type="video/mp4" />
          </Video>
        </Backgroundvideo>
        <Header>
          <Headertext> Welcome to Denjo Hearts</Headertext>
          <Label>EXPLORE</Label>
        </Header>
      </Landing>
    </Fragment>
  );
};

export default Home;

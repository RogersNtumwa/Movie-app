import React, { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOPen] = useState(false);

  const togglebar = () => {
    setIsOPen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={togglebar} />
      <Navbar toggle={togglebar} />
    </Fragment>
  );
};

export default Home;

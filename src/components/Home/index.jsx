import React from "react";

//Images
import * as comp from "../../subComponents";
import HeroPage from "./HeroPage";
import PickUpPage from "./PickUpPage";
import ShowcaseWrapper from "./ShowcaseWrapper";
const Home = () => {
  return (
    <>
      <div className="container home_page-wrapper">
        <HeroPage />
        <PickUpPage />
        <ShowcaseWrapper />
      </div>
      <comp.GeoBackBg />
    </>
  );
};

export default Home;

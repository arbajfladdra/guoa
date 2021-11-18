import React from "react";

//Images
import ScImg1 from "../../assests/images/scw_1.svg";
import ScImg2 from "../../assests/images/scw_2.svg";
import ScImg3 from "../../assests/images/scw_3.svg";
//COmponents
import * as comp from "../../subComponents";
import HeroPage from "./HeroPage";
import PickUpPage from "./PickUpPage";
import ShowcaseWrapper from "./ShowcaseWrapper";
import ShowcasePotraitWrapper from "./ShowcasePotraitWrapper";

const ShowcaseContainerWrapper = ({ children }) => {
  return (
    <div className="showcase-container-wrapper">
      <img
        src={ScImg1}
        alt=""
        className="showcase-wrapper_bg-img showcase-wrapper_bg-img-1"
      />
      <img
        src={ScImg2}
        alt=""
        className="showcase-wrapper_bg-img showcase-wrapper_bg-img-2"
      />
      <img
        src={ScImg3}
        alt=""
        className="showcase-wrapper_bg-img showcase-wrapper_bg-img-3"
      />
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="container home_page-wrapper">
        <HeroPage />
        <PickUpPage />
        <ShowcaseContainerWrapper>
          <ShowcaseWrapper />
          <ShowcasePotraitWrapper />
        </ShowcaseContainerWrapper>
      </div>
      <comp.GeoBackBg />
    </>
  );
};

export default Home;

import React from "react";

import RoundedTextImg from "../../assests/images/rounded_text.svg";
import MaleModel from "../../assests/images/male_1.png";
import FemaleModel from "../../assests/images/female_1.png";
import * as comp from "../../subComponents";

// import Btn from "../../assests/images/btn_1.svg";
const HeroPage = () => {
  return (
    <div className="hero_wrapper">
      {/* /:TODO */}
      <comp.HeadLine>
        YOUR LOOK <br />
        DESCRIBES YOU
      </comp.HeadLine>
      <div className="hero-item hero_navigation-wrapper hero_navigation_mens-wrapper">
        <comp.ImgFigure
          img={MaleModel}
          gender="male"
          type="1"
          path="/male-path"
          name="men's shop"
        />
      </div>
      <div className="hero-item hero_navigation-wrapper hero_navigation_womens-wrapper">
        <comp.ImgFigure
          img={FemaleModel}
          gender="male"
          type="1"
          path="/female-path"
          name="women's shop"
        />
      </div>
      <div className="hero-item rounded_text-wrapper">
        <img src={RoundedTextImg} alt="" />
      </div>
    </div>
  );
};

export default HeroPage;

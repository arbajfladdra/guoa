import React from "react";
import * as Icons from "../../Icons";
import Model from "../../assests/images/male_2.jpg";
import Model2 from "../../assests/images/male_3.png";
import * as comp from "../../subComponents";
import ShoesVid from "../../assests/videos/shirts.mp4";

const ShowcasePotraitWrapper = () => {
  return (
    <>
      <div className="container showcase-potrait-wrapper">
        <comp.ShowCasePotraitItem img={Model} />
        <comp.ShowCasePotraitItem img={Model} />
        <comp.ShowCasePotraitItem img={Model} />
        <comp.ShowCasePotraitItem img={Model} />
        <comp.ShowCasePotraitItem img={Model} />
      </div>
      <div className="showcase_navigation-box">
        {/* <img src={Img2} alt="" /> */}
        <comp.Video src={ShoesVid} className="showcase_navigation-img" />
        {/* <img src={Img2} alt="" className="showcase_navigation-img" /> */}
        <a className="showcase_navigation-action" path="">
          SHOW MORE
        </a>
      </div>
      <div className="container showcase-potrait-wrapper">
        <comp.ShowCasePotraitItem img={Model2} />
        <comp.ShowCasePotraitItem img={Model2} />
        <comp.ShowCasePotraitItem img={Model2} />
        <comp.ShowCasePotraitItem img={Model2} />
        <comp.ShowCasePotraitItem img={Model2} />
      </div>
    </>
  );
};

export default ShowcasePotraitWrapper;

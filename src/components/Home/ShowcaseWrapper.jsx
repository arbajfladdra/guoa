import React from "react";
import Img from "../../assests/images/shoe_demo.png";
import Img2 from "../../assests/images/shoes_2.png";
import ShoesVid from "../../assests/videos/shoes.mp4";

import * as Icons from "../../Icons";
import * as comp from "../../subComponents";

const ShowcaseWrapper = () => {
  return (
    <div className="container showcase_wrapper grid_box">
      <div className="showcase_ribbon-wrapper">
        <comp.ShowCaseBoxItem
          path="s-1"
          name="ADIDAS SHOES"
          img={Img}
          price="900"
        />
        <comp.ShowCaseBoxItem
          path="s-1"
          name="ADIDAS SHOES"
          img={Img}
          price="900"
        />
        <comp.ShowCaseBoxItem
          path="s-1"
          name="ADIDAS SHOES"
          img={Img}
          price="900"
        />
        <comp.ShowCaseBoxItem
          path="s-1"
          name="ADIDAS SHOES"
          img={Img}
          price="900"
        />
      </div>
      <div className="showcase_ribbon-wrapper grid_box">
        <div className="showcase_ribbon-left_box">
          <div className="headline-box">
            <comp.HeadLine2>SHOES</comp.HeadLine2>
            <comp.LeadT>SPORTWEAR / SNEAKERS / CASUALS</comp.LeadT>
          </div>
          <div className="showcase_ribbon-news">
            <comp.LeadX>
              <span>
                {" "}
                STARTS
                <br />
                FROM
              </span>
              <div className="price-tag price-tag-small"> 599/-</div>
            </comp.LeadX>
          </div>
        </div>
        <div className="showcase_ribbon-right_box">
          <div className="showcase_navigation-box">
            {/* <img src={Img2} alt="" /> */}
            <comp.Video src={ShoesVid} className="showcase_navigation-img" />
            {/* <img src={Img2} alt="" className="showcase_navigation-img" /> */}
            <a className="showcase_navigation-action" path="">
              SHOW MORE
            </a>
          </div>
        </div>
      </div>

      {/* dsd */}
      <div className="showcase_ribbon-wrapper grid_box">
        <div className="showcase_ribbon-left_box showcase_ribbon-wrapper">
          <comp.ShowCaseBoxItem
            path="s-1"
            name="ADIDAS SHOES"
            img={Img}
            price="900"
          />
          <comp.ShowCaseBoxItem
            path="s-1"
            name="ADIDAS SHOES"
            img={Img}
            price="900"
          />
        </div>
        <div className="showcase_ribbon-right_box">
          <div className="headline-box">
            <comp.HeadLine2>CLOTHES</comp.HeadLine2>
            <comp.LeadT>
              SHIRTS / T-SHIRTS / JEANS / TROUSERS / SHORTS / FORMAL / UNFORMAL
            </comp.LeadT>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseWrapper;

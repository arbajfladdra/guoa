import React from "react";
import * as comp from "../../subComponents";
import ShoesVid from "../../assests/videos/shoes.mp4";
import WatchesVid from "../../assests/videos/watches.mp4";
import ShirtsVid from "../../assests/videos/shirts.mp4";
import JeansVid from "../../assests/videos/jeans.mp4";
const PickField = ({ name, path, items, vid }) => {
  return (
    <a href={path} className="choose_field-item">
      <div className="choose_field-info">
        <p className="choose_field-name">{name}</p>
        <ul className="choose_field-item_list">{items}</ul>
      </div>
      <comp.Video src={vid} className="choose_field-figure" />
      <div className="choose_field-item-bg-text">
        {name}
        {name}
        {name}
        {name}
        {name}
        {name}
        {name}
        {name}
      </div>
    </a>
  );
  return;
};
const PickUpPage = () => {
  return (
    <div className="container pad-y-5 pad-0 pickup-wrapper">
      <comp.HeadLine className="txt-center">
        BEST PICKS TODAY
        <comp.Lead>DISCOVER SOMETHING NEW</comp.Lead>
      </comp.HeadLine>

      {/* //chhoose */}
      <div className=" choose_field-wrapper ">
        <PickField
          name="watches"
          path="watches"
          items="for mens and womens. Our Brands : Omega, Puma,A.Lange & Söhne. & Blancpain"
          vid={WatchesVid}
        />
        <PickField
          name="shoes"
          path="shoes"
          items="we sell Loafers,oxfords, derbys, brogues, ballet flat, mules, wedges."
          vid={ShoesVid}
        />
        <PickField
          name="shirts"
          path="shirts"
          items="Oxford Button-Down Shirt,
Dress Shirt,
Office Shirt,
Chambray &
Classic Short Sleeve Shirt. Choise is yours!"
          vid={ShirtsVid}
        />
        <PickField
          name="jeans"
          path="jeans"
          items="Straight leg jeans,
Skinny jeans (Tight jeans),
Tapered jeans &
Boot Cut Jeans / Bootleg jeans"
          vid={JeansVid}
        />
      </div>
    </div>
  );
};

export default PickUpPage;

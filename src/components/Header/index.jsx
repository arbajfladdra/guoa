import { useEffect } from "react";
//Images
import BrandLogoImg from "../../assests/images/brand.svg";
//sub components
import * as comp from "../../subComponents";
const Header = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".brand-logo").style.top = "0%";
      document.querySelector(".brand-logo2").style.top = "100%";
      document.querySelector(".header_navlinks-wrapper").style.top = "100%";
    } else {
      document.querySelector(".brand-logo").style.top = "-150%";
      document.querySelector(".brand-logo2").style.top = "0%";

      document.querySelector(".header_navlinks-wrapper").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header className="container header-wrapper">
      <div className="header-item brand-wrapper">
        <img src={BrandLogoImg} alt="" className="brand brand-logo" />
        {/* <img src={BrandLogoImg} alt="" className="brand brand-logo2" /> */}
        <p className="brand-logo2">FASION ARRISES HERE*</p>

        {/* <h3>GUOA</h3> */}
        <nav className="header_navlinks-topbar">
          <ul className="navlinks_list">
            <comp.NavLinkUnderLineEffect name="Search" link="" />
            <comp.NavLinkUnderLineEffect name="Shoppnig bag (0)" link="" />
          </ul>
        </nav>
      </div>
      <div className="header-item header_navlinks-wrapper">
        <nav className="header_navlinks">
          <ul className="navlinks_list">
            <comp.NavLinkDoubleEffect name="mens" link="index.html" />
            <comp.NavLinkDoubleEffect name="womens" link="index.html" />
            <comp.NavLinkDoubleEffect name="combos" link="index.html" />
            <comp.NavLinkDoubleEffect name="blogs" link="index.html" />
            <comp.NavLinkDoubleEffect name="about us" link="index.html" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

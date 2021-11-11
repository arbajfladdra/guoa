// navlinks components here
import bTN from "../src/assests/images/btn_2.png";
import * as Icons from "./Icons";

export const NavLinkDoubleEffect = ({ name, link }) => {
  return (
    <li className="navlinks_list-item">
      <a href={link}>{name}</a>
      <a href={link}>{name}</a>
      <a href="" className="opacityZero">
        {name}
      </a>
    </li>
  );
};

export const NavLinkUnderLineEffect = ({ name, link }) => {
  return (
    <li className="navlinks_list_topbar-item">
      <a href={link}>{name}</a>
    </li>
  );
};

export const HeadLine = ({ children }) => {
  return <h1 className="hero-item headline-1">{children}</h1>;
};
export const HeadLine2 = ({ children }) => {
  return <h1 className="hero-item headline-2 txt-black">{children}</h1>;
};
export const Lead = ({ children }) => <p className="lead">{children}</p>;
export const LeadT = ({ children }) => <p className="lead-2">{children}</p>;
export const LeadX = ({ children }) => <p className="lead-3">{children}</p>;

export const BtnPrimary = ({ name, path, Comp }) => {
  return (
    <a href={path} className="btn btn-pr">
      {Comp && <Comp name={name} />}
      {/* <span className="btn-name"> {name}</span> */}
      {/* <BtnArrow /> */}
      <img src={bTN} className="btn-arr" alt="" width="40" />
    </a>
  );
};

export const BtnArrow = () => {
  return (
    <svg
      className="btn-arr"
      width="38"
      height="67"
      viewBox="0 0 38 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5417 31.5458L15.6751 15.6333C15.0417 14.5167 14.0917 14.5167 13.4584 15.6333C12.8251 16.75 12.8251 18.425 13.4584 19.5417L21.2167 33.2208L13.4584 46.9C13.1417 47.4583 12.9834 48.0167 12.9834 48.8542C12.9834 50.5292 13.6167 51.6458 14.5667 51.6458C15.0417 51.6458 15.3584 51.3667 15.6751 50.8083L24.7001 34.8958C25.1751 34.3375 25.1751 32.6625 24.5417 31.5458Z"
        fill="#4F2323"
      />
    </svg>
  );
};

export const ImgFigure = ({ img, gender, path, name }) => {
  return (
    <div
      className={`hero-item hero_navigation-wrapper hero_navigation_${gender}-wrapper`}
    >
      <figure className="hero_navigation-card">
        <img src={img} alt="" className="hero_navigation-img" />
        <BtnPrimary path={path} name={name} Comp={NavLinkDoubleEffect} />
      </figure>
    </div>
  );
};

export const GeoBackBg = () => {
  return (
    <div className="geo_back_bg-wrapper">
      <div className="geo_back_bg-item circle">
        <svg height="200vmin" width="200vmin">
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            // stroke="black"
            // strokeWidth="3"
            // fill="red"
          />
        </svg>
      </div>
      <div className="geo_back_bg-item triangle">
        <svg
          width="1139"
          height="898"
          viewBox="0 0 1139 898"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.86283 897.25L569.5 0.934536L1137.14 897.25H1.86283Z"
            stroke="#FCCFCF"
          />
        </svg>
      </div>
    </div>
  );
};

export const ShowCaseBoxItem = ({ name, price, img, path }) => {
  return (
    <a href={path} className="showcase_item-box showcase_item">
      <img className="showcase_item-img" src={img} />
      <div className="showcase_item-details">
        <div className="showcase_item-info">
          <p className="showcase_item-name">{name}</p>
          <p className="showcase_item-price">{price}/-</p>
        </div>
        <div className="showcase_item-actions">
          <p className="love_it">
            <Icons.Heart />
          </p>
          <p className="add_to_cart">
            <Icons.Eye />
          </p>
          <p className="watch_later">
            <Icons.Cart />
          </p>
        </div>
      </div>
    </a>
  );
};

export const Video = ({ src, className }) => {
  return (
    <video src={src} autoPlay loop muted className={className}>
      {" "}
    </video>
  );
};

import React from "react";

const Banner = ({ title, description }) => {
  return (
    <div className="banner_container">
      <div className="banner_text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {/* <div className="homeContactSection_bg">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <div className="banner_bg">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

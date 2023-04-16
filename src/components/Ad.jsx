import React from "react";

const Ad = (props) => {
  return (
    <div id="ad1">
      <div id="ad-data">
        <div className="t-title dark">{props.tTitle}</div>
        <div className="m-title dark">{props.mTitle}</div>
        <div id="shop-btn">
          <img src="./imgs/b-arr.png" alt="" />
          Shop Now
        </div>
      </div>
      <img src={props.adImg} alt="" />
    </div>
  );
};

export default Ad;

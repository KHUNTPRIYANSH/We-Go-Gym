import React from "react";
import "../styles/SecHead.css";
const SecHead = (props) => {
  return (
    <div id="sec-hd">
      <div className="ttl">{props.title}</div>
      <div className="ttd">{props.desc}</div>
      <div id="cor-a" className="hd-arr">
        <img src="./imgs/3.png" alt="" />
      </div>
    </div>
  );
};

export default SecHead;

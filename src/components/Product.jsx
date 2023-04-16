import React from "react";
import "../styles/Product.css";
const Product = (props) => {
  return (
    <div id="prod">
      <div className="proTop">
        <img src={props.proImg} alt="" />
      </div>
      <div id="proData">
        <div className="proName">{props.proName}</div>
        <div className="proPrice">{props.proPrice}</div>
      </div>
      <div className="atc">add to cart</div>
    </div>
  );
};

export default Product;

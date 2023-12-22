import React, { useContext } from "react";
import "../styles/Product.css";
import { CartContext } from "../Providers/CartContext";
const Product = (props) => {
  const cart = useContext(CartContext);
  const handleAddToCart = () => {
    cart.setCartProduct([
      ...cart.cartProduct,
      {
        proname: props.proName,
        proimg: props.proImg,
        proprice: props.proPrice,
      },
    ]);
    // cart.setCartProduct([]);
    console.log(cart.cartProduct);
  };
  return (
    <div id="prod">
      <div className="proTop">
        <img src={props.proImg} alt="" />
      </div>
      <div id="proData">
        <div className="proName">{props.proName}</div>
        <div className="proPrice">{props.proPrice}</div>
      </div>
      <div className="atc" onClick={handleAddToCart}>
        add to cart
      </div>
    </div>
  );
};

export default Product;

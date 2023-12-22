import React, { useContext, useRef } from "react";
import "../styles/Cart.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { Context } from "react";
import { CartContext } from "../Providers/CartContext";
import { CtVis } from "../Providers/CartVisibility";

const Cart = () => {
  const crt = React.useContext(CartContext);
  const ctTog = React.useContext(CtVis);
  const ctSec = useRef();
  if (ctSec.current) {
    console.log(ctTog.ctStatus);
    console.log(ctSec.current);
    if (crt && ctTog && ctSec) {
      if (ctTog.ctStatus === 0) {
        ctSec.current.style.right = "-500px";
      } else {
        ctSec.current.style.right = "0px";
      }
    }
  }

  return (
    <div ref={ctSec} id="cart-sec">
      <div id="cart-hdr">
        <div id="crt-hd-l">
          <big>CART</big>
          <small>({crt.cartProduct.length})</small>
        </div>
        <div id="crt-hd-r">
          <IconButton
            onClick={() => {
              ctTog.setctStatus(0);
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <div id="cart-body">
        {crt &&
          crt.cartProduct.map((e) => (
            <div id="ct-pp">
              <div className="ct-pp-1">
                <img src={e.proimg} alt="" />{" "}
              </div>
              <div className="ct-pp-2">{e.proname}</div>
              <div className="ct-pp-3">{e.proprice}</div>
            </div>
          ))}
      </div>
      <div id="cart-ftr">
        <div className="tot">
          <div className="tot-l">Subtotal:</div>
          <div className="tot-r">$450.00</div>
        </div>
        <div className="g-btn">CHECKOUT</div>
      </div>
    </div>
  );
};

export default Cart;

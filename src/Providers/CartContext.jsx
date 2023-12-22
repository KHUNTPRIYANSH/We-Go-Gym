import React, { createContext } from "react";
import { useState } from "react";
export const CartContext = React.createContext(null);

export const CartProvider = (props) => {
  const [cartProduct, setCartProduct] = useState([]);

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

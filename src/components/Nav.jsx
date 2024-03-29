import React, { Children, useEffect, useState, useContext } from "react";
import "../styles/Nav.css";
import Badge from "@mui/material/Badge";
import { CartContext } from "../Providers/CartContext";
import { CtVis } from "../Providers/CartVisibility";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const Nav = () => {
  const cttog = useContext(CtVis);
  const cartCount = useContext(CartContext);
  const handleCartBtn = () => {
    console.log("crt button status : ", cttog.ctStatus);
    if (cttog.ctStatus === 0) cttog.setctStatus(1);
    if (cttog.ctStatus === 1) cttog.setctStatus(0);
  };
  const [toggle, setToggle] = useState(false);
  // const [btn, setBtn] = useState(false);
  let btn;
  btn = btn ? false : true;
  const handleToggle = () => {
    if (toggle) {
      console.log("bandh kairu");
      setToggle(false);
      document.getElementById("hid-nv").style.top = "-500px";
    } else {
      console.log("Chalu kairu");
      setToggle(true);
      document.getElementById("hid-nv").style.top = "50px";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleClickScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="https://f7.vamtam.com/wp-content/uploads/2020/12/logo.svg"
            alt=""
          />
          {/* <small
            style={{
              fontFamily: "var(--font8)",
              fontSize: "3rem",
              fontWeight: "bolder",
            }}
          >
            #WGG
          </small> */}
        </div>
        <div className="links">
          <Link to="/" onClick={handleClickScroll}>
            Home
          </Link>
          <Link onClick={handleClickScroll} to="/about">
            About
          </Link>
          <Link onClick={handleClickScroll} to="/membership">
            Membership
          </Link>
          <Link onClick={handleClickScroll} to="/team">
            Team
          </Link>
          <Link onClick={handleClickScroll} to="/blog">
            Community
          </Link>
          <Link onClick={handleClickScroll} to="/shop">
            Shop
          </Link>
          <Link onClick={handleClickScroll} to="/contact">
            Contact
          </Link>
        </div>
        <div className="nv-btns">
          <Link to="/" id="row">
            <img src="./imgs/2.png" alt="" id="arrow" />
            JOIN
          </Link>
          <Link to="/" id="fp">
            FREE PASS
          </Link>

          <Link to="/" onClick={handleCartBtn}>
            <Badge
              color="secondary"
              badgeContent={cartCount.cartProduct.length}
              showZero
            >
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
        <div id="togg" onClick={handleToggle} isActive={btn}>
          <img src="./imgs/tog.png" alt="" />
        </div>
      </nav>
      <div id="hid-nv">
        <div className="links">
          <Link to="/" onClick={handleClickScroll}>
            Home
          </Link>
          <Link onClick={handleClickScroll} to="/about">
            About
          </Link>
          <Link onClick={handleClickScroll} to="/membership">
            Membership
          </Link>
          <Link onClick={handleClickScroll} to="/team">
            Team
          </Link>
          <Link onClick={handleClickScroll} to="/blog">
            Community
          </Link>
          <Link onClick={handleClickScroll} to="/shop">
            Shop
          </Link>
          <Link onClick={handleClickScroll} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

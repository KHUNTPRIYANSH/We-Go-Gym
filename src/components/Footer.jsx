import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const footer = () => {
  function handleClickScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <footer>
      <div className="ftr1">
        <div className="f1r">
          <div className="logo">
            <img
              src="https://f7.vamtam.com/wp-content/uploads/2020/12/logo.svg"
              alt=""
            />
          </div>
          <div className="loc">
            QUBIT, Rajkot, Gujarat, India -360004
            <br /> +91 94092 59856
          </div>
          <div className="tm">
            Every day: 9:00 – 22:00 <br /> Sat – Sun: 8:00 – 21:00
          </div>
        </div>
        <div className="f1l">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>
      <div className="ftr2">
        <input
          type="text"
          placeholder="Enter your email to get curated content from our trainers and nutrition experts to keep you feeling good…"
        />
        <input type="submit" value="Sign Up" className="btn" />
      </div>
      <div className="ftr3">
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
        <div className="policy">
          <span style={{ display: "flex", alignItems: "center" }}>
            Copyright © &nbsp; <img src="./imgs/fv.png" height="30px" alt="" />
            QUBIT &nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; &nbsp; Terms &
            Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;

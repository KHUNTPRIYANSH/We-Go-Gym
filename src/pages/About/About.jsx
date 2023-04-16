import React from "react";
import Gal from "../../components/Gal";
import SecHead from "../../components/SecHead";
import "../../styles/About.css";

const About = () => {
  return (
    <>
      <SecHead
        title="about"
        desc="        F7 is more than a place where high performers come to be their best. F7
        has attracted global attention for its method of training and the
        incorporation of technology in its fitness regimens. It was rated the
        Top Training Gym in NYC in New York Magazine’s Best Of issue."
      />
      <div className="ab-scr">
        <div class="custom-shape-divider-top-1679208377">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div class="custom-shape-divider-bottom-1679208197">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="ab-cds">
        <div className="acd">
          <div className="acd-l">
            <div className="m-title dark">
              OUR <br /> MISSION
            </div>
            <p>
              We are the un-corporation. Our mission is to provide you with all
              the tools you need to reach your fitness goals in a clean,
              vibrant, engaging environment you will be proud to call your GYM.
              We won’t hold you hostage like other fitness clubs, you’ll want to
              stay because we care!
            </p>
          </div>
          <div className="acd-r">
            <img src="./imgs/ab1.webp" alt="" />
          </div>
        </div>
        <div className="acd">
          <div className="acd-l">
            <div className="m-title dark">
              OUR <br /> MISSION
            </div>
            <p>
              We are the un-corporation. Our mission is to provide you with all
              the tools you need to reach your fitness goals in a clean,
              vibrant, engaging environment you will be proud to call your GYM.
              We won’t hold you hostage like other fitness clubs, you’ll want to
              stay because we care!
            </p>
          </div>
          <div className="acd-r">
            <img src="./imgs/ab5.webp" alt="" />
          </div>
        </div>
      </div>
      <div id="the-gym" className="mobf">
        <center>
          <div className="t-title">The gym</div>
        </center>
        <main>
          <div className="lf">
            <img src="./imgs/ab3.webp" alt="" />
          </div>
          <div className="md">
            <img src="./imgs/ab1.webp" alt="" />
            <img src="./imgs/ab2.webp" alt="" />
          </div>
          <div className="ri">
            <img src="./imgs/ab4.webp" alt="" />
            <img src="./imgs/ab5.webp" alt="" />
          </div>
        </main>
      </div>
      <Gal />
    </>
  );
};

export default About;

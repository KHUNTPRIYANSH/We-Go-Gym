import React from "react";
import Gal from "../../components/Gal";
import "../../styles/Mship.css";
import SecHead from "../../components/SecHead";
const Mship = () => {
  return (
    <>
      <SecHead
        title="MEMBERSHIP"
        desc=" At F7 Fitness, membership not only gives you access to our clean and spacious gyms, it connects you with knowledgeable coaches and an uplifting community inside our gyms. We also make it easy to include friends and family, for extra inspiration on your journey to results."
      />
      <div id="the-mship">
        <center>
          <div className="t-title">
            MORE THAN A GYM <br /> MEMBERSHIP
          </div>
        </center>
        <div id="ms-crd">
          <div id="msc">
            <div className="m-title dark">ONE DAY PASS</div>

            <p>
              Whether you’re visiting F7 on business or are just taking your
              personal fitness one day at a time, we’d like to invite you to
              experience all that F7 has to offer. You are always Welcome ot the
              F7 Club!
            </p>

            <b>$15/Per Day</b>
            <div>
              <img src="./imgs/b-arr.png" alt="" />
              Join Now
            </div>
          </div>
          <div id="msc">
            <div className="m-title dark">MONTHLY PASS</div>
            <strong>BEST VALUE</strong>
            <p>
              WHETHER YOU’RE VISITING F7 ON BUSINESS OR ARE JUST TAKING YOUR
              PERSONAL FITNESS ONE DAY AT A TIME, WE’D LIKE TO INVITE YOU TO
              EXPERIENCE ALL THAT F7 HAS TO OFFER.
            </p>

            <b>$90/Per Day</b>
            <div>
              <img src="./imgs/b-arr.png" alt="" />
              Join Now
            </div>
          </div>
          <div id="msc">
            <div className="m-title dark">YEARLY PASS</div>

            <p>
              WITH A 1-YEAR COMMITMENT WE OFFER MONTHLY MEMBERSHIP FOR ONLY $59.
              WHEN YOU PRE-PURCHASE A COMPLETE YEAR INDIVIDUAL MEMBERSHIP YOU
              GET 2/M FREE EXTENTION.
            </p>

            <b>$59/Per Day</b>
            <div>
              <img src="./imgs/b-arr.png" alt="" />
              Join Now
            </div>
          </div>
        </div>
      </div>
      <section id="pack" className="m-sec">
        <div className="sqrt">
          <div class="custom-shape-divider-top-1679208377"></div>
        </div>
        <div id="dgli">
          <img src="./imgs/dgl.png" alt="" />
        </div>
        <center className="mt-5">
          <div className="t-title dark">jOIN TODAY</div>
          <div id="one-to">
            <div className="nm nm1">1</div>
            <hr />
            <div className="nm nm2">2</div>
          </div>
        </center>

        <div id="prc-crd">
          <label for="ww1" className="pc">
            <span>
              <input type="radio" name="plan" className="w-dot" id="ww1" />

              <div className="m-title dark">
                ONE DAY <br /> PASS
              </div>
              <b>$15/Per Day</b>
              <p>
                Whether you’re visiting F7 on business or are just taking your
                personal fitness one day at a time, we’d like to invite you to
                experience all that F7 has to offer. You are always Welcome ot
                the F7 Club!
              </p>
            </span>
          </label>
          <label for="ww2" className="pc">
            <span>
              <input type="radio" name="plan" className="w-dot" id="ww2" />
              <div className="m-title dark">
                Monthly <br /> PASS
              </div>
              <b>$90/Per Month</b>
              <p>
                WHETHER YOU’RE VISITING F7 ON BUSINESS OR ARE JUST TAKING YOUR
                PERSONAL FITNESS ONE DAY AT A TIME, WE’D LIKE TO INVITE YOU TO
                EXPERIENCE ALL THAT F7 HAS TO OFFER.
              </p>
            </span>
          </label>
          <label for="ww3" className="pc">
            <span>
              <input type="radio" name="plan" className="w-dot" id="ww3" />
              <div className="m-title dark">
                YEARLY <br /> PASS
              </div>
              <b>$59/Per Month</b>
              <p>
                WITH A 1-YEAR COMMITMENT WE OFFER MONTHLY MEMBERSHIP FOR ONLY
                $59. WHEN YOU PRE-PURCHASE A COMPLETE YEAR INDIVIDUAL MEMBERSHIP
                YOU GET 2/M FREE EXTENTION.
              </p>
            </span>
          </label>
          <div className="conti">
            <img src="./imgs/b-arr.png" alt="" />
            Continue
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1679121643">
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
      </section>

      <Gal />
    </>
  );
};

export default Mship;

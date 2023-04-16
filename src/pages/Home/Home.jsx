import React from "react";
import Gal from "../../components/Gal";
import "../../styles/Hero.css";
const Home = () => {
  return (
    <div>
      <section id="hero-sec">
        <div className="hero-q">
          <div className="hq1">WORK PLAYERS OFF</div>
          <div className="hq1"># WE GO GYM</div>
          <div className="hq1">
            <img src="./imgs/4.png" alt="" />
          </div>
        </div>
      </section>
      <section id="classes">
        <div id="title">
          <div className="m-title">CLASSES DESIGNED</div>
          <div className="t-title">FOR YOU</div>
        </div>
        <div className="class-cards">
          <div className="cc-card">
            <div className="poster">
              <img src="./imgs/cl1.webp" alt="" />
            </div>
            <div className="c-txt">
              <div className="m-title">
                outdoor <br />
                classes
              </div>
              <img src="./imgs/2.png" alt="" id="arrow" />
            </div>
          </div>
          <div className="cc-card">
            <div className="poster">
              <img src="./imgs/cl2.webp" alt="" />
            </div>
            <div className="c-txt">
              <div className="m-title">
                personal <br />
                training
              </div>
              <img src="./imgs/2.png" alt="" id="arrow" />
            </div>
          </div>
          <div className="cc-card">
            <div className="poster">
              <img src="./imgs/cl3.webp" alt="" />
            </div>
            <div className="c-txt">
              <div className="m-title">
                group <br />
                training
              </div>
              <img src="./imgs/2.png" alt="" id="arrow" />
            </div>
          </div>
          <div className="cc-card">
            <div className="poster">
              <img src="./imgs/cl4.webp" alt="" />
            </div>
            <div className="c-txt">
              <div className="m-title">
                digital <br />
                coaching
              </div>
              <img src="./imgs/2.png" alt="" id="arrow" />
            </div>
          </div>
        </div>
      </section>
      <section id="intro">
        <div className="it-l">
          <div id="it-lt">
            <div id="intro-arr">
              <img src="./imgs/2.png" alt="" />
              <h1 id="title">
                <div className="m-title dark">introduction</div>
                <div className="t-title dark">F7 club</div>
              </h1>
            </div>
            <div id="it-crd" className="mt-10">
              <div className="olay">
                <img src="./imgs/int3.webp" alt="" />
              </div>
              <div className="m-title dark">MISSION</div>
              <p className="s-title">
                Our purpose is to pass on empowering knowledge and training
                guidance in order to have a positive impact on the health and
                fitness of everyone we work with.
              </p>
              <p className="s-title">
                To provide a personalised health and fitness service that
                unlocks every individual’s true potential so they can achieve
                their desired goals.
              </p>
            </div>
          </div>
          <div id="it-lb">
            <div className="silder">
              <img src="./imgs/pst1.webp" alt="" width="100%" />
              <center id="lm-bg">
                <marquee className="s-title dark">
                  Clean + Airy Space = Stay Safe in COVID 19 Pandemic.
                </marquee>
              </center>
              <div id="eqmt" className="mt-5">
                <div className="m-title dark">EQUIPMENT</div>
                <br />
                <div className="s-title">
                  Give your workout more variety than ever with our accessories,
                  from warmup to cooldown. Increase your body’s capacities every
                  day, from stability to mobility, from power to speed.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="it-r">
          <div id="it-crd">
            <div className="olay">
              <img src="./imgs/int1.webp" alt="" />
            </div>
            <div className="m-title dark">STORY</div>
            <p className="s-title">
              Our main focus at F7 Fitness is functional training because of the
              proven benefits. With an emphasis on mobility, strength, and
              conditioning, the benefits of functional training differ from
              other workouts because of the way it targets your body.
            </p>
          </div>
          <div id="it-crd" className="mt-5">
            <div className="olay">
              <img src="./imgs/int2.webp" alt="" />
            </div>
            <div className="m-title dark">APPROACH</div>
            <b className="s-title">INOVATION + MOTIVATION = RESULTS</b>
            <p className="s-title">
              We are a hybrid gym and training facility. We have clean, state of
              the art facilities with the most knowledgeable staff and
              cutting-edge training methods. We offer open gym, team training,
              group classes, boxing, cycle and personal training.
            </p>
          </div>
        </div>
      </section>
      <section id="cyc">
        <div id="cor-a">
          <img src="./imgs/3.png" alt="" />
        </div>
      </section>
      <section id="feed">
        <div id="title">
          <div className="m-title dark">To geather we</div>
          <div className="t-title dark">succeed</div>
        </div>
        <div className="rev">
          <div className="r-lef">
            <img src="./imgs/rev.webp" />
          </div>
          <div className="r-right">
            <img id="qt1" src="./imgs/8.png" alt="" />
            <p className="m-title dark" id="light">
              This gym is by far the best gym I’ve ever been to, and I’ve been
              to a lot of gyms! The workouts are amazing and the people there
              are da bomb!<strong> Thank you !</strong>💖👏
            </p>
            <img src="./imgs/9.png" alt="" id="qt2" />

            <div className="play-sto">
              <img height="60px" src="./imgs/pla.jpg" alt="" />
              <span>
                <img src="./imgs/2.png" alt="" id="arr" />
                <a href="/">More Reviews</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="pack">
        <div id="dgl">
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
                experience all that F7 has to offer. You are always Welcome!
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
                Whether you’re visiting F7 on business or are just taking your
                personal fitness one day at a time, we’d like to invite you to
                experience all that F7 has to offer. You are always Welcome!
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
                Whether you’re visiting F7 on business or are just taking your
                personal fitness one day at a time, we’d like to invite you to
                experience all that F7 has to offer. You are always Welcome!
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
    </div>
  );
};

export default Home;

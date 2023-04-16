import React from "react";
import Ad from "../../components/Ad";
import Gal from "../../components/Gal";
import Product from "../../components/Product";
import "../../styles/Shop.css";
const Shop = () => {
  const ar = [1, 2, 3, 4];
  return (
    <div id="shop-sec">
      <Ad
        tTitle="30% OFF"
        mTitle="Protein Shake/Biscuits"
        adImg="./imgs/shop-poster2.webp"
      />
      <div id="the-gym" style={{ background: "#fff", padding: "0 10vw" }}>
        <center>
          <div className="t-title dark">SHOP PROTEINS</div>
        </center>
      </div>

      <div id="displayProducts">
        <Product
          proImg="./imgs/sp1.webp"
          proName="Protein Shake Fruity"
          proPrice=" $89.00"
        />
        <Product
          proImg="./imgs/sp2.webp"
          proName="Protein Shake Vegan"
          proPrice=" $29.00"
        />
        <Product
          proImg="./imgs/sp4.webp"
          proName="Protein Shake Vegan"
          proPrice=" $29.00"
        />
        <Product
          proImg="./imgs/sp5.webp"
          proName="Protein Shake Vegan"
          proPrice=" $29.00"
        />
        <Product
          proImg="./imgs/sp6.webp"
          proName="Protein Shake Vegan"
          proPrice=" $29.00"
        />
        <Product
          proImg="./imgs/sp7.webp"
          proName="Protein Shake Vegan"
          proPrice=" $29.00"
        />
        <Product
          proImg="./imgs/sp8.webp"
          proName="Protein Shake Vegan"
          proPrice=" $29.00"
        />
        <Product
          proImg="./imgs/sp3.webp"
          proName="Protein Shake Vegan"
          proPrice=" $29.00"
        />
      </div>
      <div id="ad2">
        <Ad
          tTitle="FREE DELIVERY"
          mTitle="on Orders Over $100"
          adImg="./imgs/shop-poster1.webp"
        />
      </div>
      <div id="the-gym" style={{ background: "#fff", padding: "0 10vw" }}>
        <center>
          <div className="t-title dark">SHOP SPORT BOTTLES</div>
        </center>
      </div>
      <div id="displayProducts" style={{ flexDirection: "row-reverse" }}>
        {ar.map((e) => {
          return (
            <Product
              proImg={`./imgs/btt${e}.webp`}
              proName="Sport Bottle"
              proPrice=" $12.00"
            />
          );
        })}
      </div>
      <section id="xyz">
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

export default Shop;

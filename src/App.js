import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import "./MQ.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Team from "./pages/About/Team";
import Mship from "./pages/About/Mship";
import Blog from "./pages/About/Blog";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/contact/Contact";
import { CtVisProvider } from "./Providers/CartVisibility";
import { CartProvider } from "./Providers/CartContext";
// import Scroll2Top from "./components/Scroll2Top";
const App = () => {
  return (
    <div id="application">
      <CartProvider>
        <Router>
          {/* <Scroll2Top> */}
          <CtVisProvider>
            <Nav />
            <Cart />
          </CtVisProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Mship />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
          <Footer />
          {/* </Scroll2Top> */}
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;

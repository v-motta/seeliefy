import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/navbar/navbar";
import Carousel from "./components/sections/carousel/carousel";
import Customers from "./components/sections/customers/customers";
import About from "./components/sections/about/about";
import Portifolio from "./components/sections/portfolio/portfolio";
import Contact from "./components/sections/contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <div
        data-bs-spy="scroll"
        data-bs-target="navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
      >
        <Carousel />
        <About />
        <Portifolio />
        <Customers />
        <Contact />
      </div>
    </>
  );
}

export default App;

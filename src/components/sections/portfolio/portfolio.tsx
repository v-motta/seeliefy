/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import meowch1 from "../../../assets/imgs/portfolio/meowch-image1.png";
import meowch2 from "../../../assets/imgs/portfolio/meowch-image2.png";
import meowch3 from "../../../assets/imgs/portfolio/meowch-image3.png";

// remover esses 3 imports
import image1 from "../../../assets/imgs/image1.webp";
import image2 from "../../../assets/imgs/image2.webp";
import image3 from "../../../assets/imgs/image3.webp";

const PortfolioJSON = [
  {
    projetoName: "Meowch",
    images: [
      {
        image: meowch1,
      },
      {
        image: meowch2,
      },
      {
        image: meowch3,
      },
    ],
  },

  // adicionar o nome do projeto e as imagens
  {
    projetoName: "Projeto2",
    images: [
      {
        image: image1,
      },
      {
        image: image2,
      },
      {
        image: image3,
      },
    ],
  },
];

function Portifolio() {
  const [project, setProject] = useState("Meowch");

  return (
    <>
      <h1 id="scrollspyHeading2" className="text-center">
        Portifólio
      </h1>
      <div className="container d-flex">
        <ul className="nav nav-tabs-custom me-3">
          {PortfolioJSON.map((projeto) => (
            <li className="nav-item text-no-wrap" key={projeto.projetoName}>
              <button
                className={`nav-link text-nowrap w-100 ${
                  projeto.projetoName === project ? "active-project" : ""
                }`}
                aria-current="page"
                onClick={() => setProject(projeto.projetoName)}
              >
                {projeto.projetoName}
              </button>
            </li>
          ))}
        </ul>
        <div id="carouselExampleIndicators2" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* começo do carousel */}
          <div className="carousel-inner">
            {PortfolioJSON.filter((item) => item.projetoName === project).map(
              (projeto) =>
                projeto.images.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image.image}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                ))
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Portifolio;

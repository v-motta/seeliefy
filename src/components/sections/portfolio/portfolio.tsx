import React, { useState } from "react";

import { PortfolioJSON } from "./list";

function Portifolio() {
  const [project, setProject] = useState("BBB 23 - Corrida");

  const projectReplaced = project.replace(/[- ]/g, "");

  return (
    <>
      <h1 id="scrollspyHeading2" className="text-center">
        Portifólio
      </h1>
      <div className="container d-flex flex-column flex-sm-row">
        <ul className="nav nav-tabs-custom me-0 me-sm-3 mb-3 mb-sm-0">
          {PortfolioJSON.map((projeto) => (
            <li className="nav-item text-no-wrap" key={projeto.projetoName}>
              <button
                className={`nav-link text-nowrap text-end w-100 ${
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
        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          key={projectReplaced}
        >
          <div className="carousel-indicators mb-0">
            {PortfolioJSON.filter((item) => item.projetoName === project).map(
              (item) =>
                item.images.map((_image, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current="true"
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))
            )}
          </div>
          <div className="carousel-inner">
            {PortfolioJSON.filter((item) => item.projetoName === project).map(
              (projeto) =>
                projeto.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image.image}
                      className="d-block rounded-4 w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block pb-0">
                      <h5>{projeto.title}</h5>
                      <p>{projeto.subtitle}</p>
                    </div>
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

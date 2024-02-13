/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import flipphone from "../../../assets/imgs/portfolio/flip-phone.webp";
import zombieworld from "../../../assets/imgs/portfolio/zombie-world.webp";
import monstertruck from "../../../assets/imgs/portfolio/monster-trucks.webp";

import meowch1 from "../../../assets/imgs/portfolio/meowch-1.webp";
import meowch2 from "../../../assets/imgs/portfolio/meowch-2.webp";
import meowch3 from "../../../assets/imgs/portfolio/meowch-3.webp";

import pebolim1 from "../../../assets/imgs/portfolio/pebolim-1.webp";
import pebolim2 from "../../../assets/imgs/portfolio/pebolim-2.webp";

import garrafa1 from "../../../assets/imgs/portfolio/garrafa-1.webp";

import hockey1 from "../../../assets/imgs/portfolio/hockey-1.webp";
import hockey2 from "../../../assets/imgs/portfolio/hockey-2.webp";

const PortfolioJSON = [
  {
    projetoName: "Hypercasuals",
    title: "Projetos Hypercasuais",
    subtitle:
      "Nosso portfólio de projetos hypercasuais engloba diferentes projetos.",
    images: [
      {
        image: flipphone,
      },
      {
        image: zombieworld,
      },
      {
        image: monstertruck,
      },
    ],
  },

  {
    projetoName: "Meowch",
    title: "Meowch",
    subtitle:
      "Projeto trabalhado junto a empresa Aurora Borealis, 2º lugar na maior gamejam do Brasil, no Big Festival Magalu",
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

  {
    projetoName: "Pebolim",
    title: "Pebolim físico",
    subtitle: "Projeto de pebolim físico feito com Arduíno e impressora 3D.",
    images: [
      {
        image: pebolim1,
      },
      {
        image: pebolim2,
      },
    ],
  },

  {
    projetoName: "Garrafa",
    title: "First slide label",
    subtitle: "Some representative placeholder content for the first slide.",
    images: [
      {
        image: garrafa1,
      },
    ],
  },

  {
    projetoName: "Air hockey",
    title: "First slide label",
    subtitle: "Some representative placeholder content for the first slide.",
    images: [
      {
        image: hockey1,
      },
      {
        image: hockey2,
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
          <div className="carousel-indicators mb-0">
            {PortfolioJSON.filter((item) => item.projetoName === project).map(
              (item) =>
                item.images.map((image, index) => (
                  <button
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

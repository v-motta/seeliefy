/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

/* BBB */
import corrida1 from "../../../assets/imgs/portfolio/bbb/corrida-1.webp";
import corrida2 from "../../../assets/imgs/portfolio/bbb/corrida-2.webp";
import corrida3 from "../../../assets/imgs/portfolio/bbb/corrida-3.webp";
import corrida4 from "../../../assets/imgs/portfolio/bbb/corrida-4.webp";
import boxe1 from "../../../assets/imgs/portfolio/bbb/boxe-1.webp";

/* Metaverso */
import metaverso1 from "../../../assets/imgs/portfolio/metaverso/metaverso-1.webp";
import metaverso2 from "../../../assets/imgs/portfolio/metaverso/metaverso-2.webp";
import metaverso3 from "../../../assets/imgs/portfolio/metaverso/metaverso-3.webp";

/* Hacka Kids */
import hacka20231 from "../../../assets/imgs/portfolio/hackakids/hacka2023-1.webp";
import hacka20232 from "../../../assets/imgs/portfolio/hackakids/hacka2023-2.webp";
import hacka20233 from "../../../assets/imgs/portfolio/hackakids/hacka2023-3.webp";
import hacka20221 from "../../../assets/imgs/portfolio/hackakids/hacka2022-1.webp";
import hacka20222 from "../../../assets/imgs/portfolio/hackakids/hacka2022-2.webp";

/* Hacka Kids */
import kidplay1 from "../../../assets/imgs/portfolio/kidplay/kidplay-1.webp";
import kidplay2 from "../../../assets/imgs/portfolio/kidplay/kidplay-2.webp";
import kidplay3 from "../../../assets/imgs/portfolio/kidplay/kidplay-3.webp";

/* Hypercasual */
import hypercasual1 from "../../../assets/imgs/portfolio/hypercasual/hypercasual-1.webp";
import hypercasual2 from "../../../assets/imgs/portfolio/hypercasual/hypercasual-2.webp";
import hypercasual3 from "../../../assets/imgs/portfolio/hypercasual/hypercasual-3.webp";
import hypercasual4 from "../../../assets/imgs/portfolio/hypercasual/hypercasual-4.webp";

const PortfolioJSON = [
  /*BBB 23*/
  {
    projetoName: "BBB 23 - Corrida",
    title: "BBB 23 - Simulador de corrida",
    subtitle:
      "Outsourcing de um jogo onde os participantes competiam pela maior pontuação valendo uma premiação pelo patrocinador.",
    images: [
      {
        image: corrida1,
      },
      {
        image: corrida3,
      },
      {
        image: corrida2,
      },
      {
        image: corrida4,
      },
    ],
  },

  /*BBB22*/
  {
    projetoName: "BBB 23 - Boxe",
    title: "BBB 23 - Boxe VR",
    subtitle:
      "Outsourcing de um jogo de simulador de boxe em VR onde o participante do programa disputava contra lutadores famosos em sua versão virtual.",
    images: [
      {
        image: boxe1,
      },
    ],
  },

  /*Metaverso*/
  {
    projetoName: "Metaverso",
    title: "Metaverso",
    subtitle:
      "Outsourcing de criação de jogo online metaverso com programação multiplayer e sistema de mundos e terrenos com uso de personagens personalizados.",
    images: [
      {
        image: metaverso1,
      },
      {
        image: metaverso2,
      },
      {
        image: metaverso3,
      },
    ],
  },

  /*Hacka Kids - 2023*/
  {
    projetoName: "Hacka Kids - 2023",
    title: "Hacka Kids - 2023",
    subtitle:
      "Jogo online 4x4 de brincadeira de arremeçar bexigas. Voltado ao publico infantil no evento Hacka kids no Rio de Janeiro, onde as crianças jogam disputando medalhas ao participar.",
    images: [
      {
        image: hacka20231,
      },
      {
        image: hacka20232,
      },
      {
        image: hacka20233,
      },
    ],
  },

  /*Hacka Kids - 2022*/
  {
    projetoName: "Hacka Kids - 2022",
    title: "Hacka Kids - 2022",
    subtitle: "Identidade visual das peças gráficas do evento",
    images: [
      {
        image: hacka20221,
      },
      {
        image: hacka20222,
      },
    ],
  },

  /*KidPlay*/
  {
    projetoName: "KidPlay",
    title: "KidPlay",
    subtitle:
      "Criação de brinquedos variados ergonomicos, estimulantes e seguros para crianças.",
    images: [
      {
        image: kidplay1,
      },
      {
        image: kidplay2,
      },
      {
        image: kidplay3,
      },
    ],
  },

  /*Hypercasuais*/
  {
    projetoName: "Hypercasuais",
    title: "Hypercasuais",
    subtitle:
      "Trabalho feito em conjunto com estudio parceiro, com entrega de diversos jogos Hypercasuais.",
    images: [
      {
        image: hypercasual1,
      },
      {
        image: hypercasual2,
      },
      {
        image: hypercasual3,
      },
      {
        image: hypercasual4,
      },
    ],
  },
];

function Portifolio() {
  const [project, setProject] = useState("BBB 23 - Corrida");

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

import React from "react";

import globo from "../../../assets/imgs/clientes/globo.png";
import sbt from "../../../assets/imgs/clientes/sbt.png";
import bbb from "../../../assets/imgs/clientes/bbb.png";
import nestle from "../../../assets/imgs/clientes/nestle.png";
import theTown from "../../../assets/imgs/clientes/the-town.webp";
import lollapalooza from "../../../assets/imgs/clientes/lollapalooza.png";
import interlagos from "../../../assets/imgs/clientes/interlagos.jpg";
import cinemaNosso from "../../../assets/imgs/clientes/cinema-nosso.webp";
import miniclip from "../../../assets/imgs/clientes/miniclip.png";
import movipar from "../../../assets/imgs/clientes/movipar.png";
import auroraBorealis from "../../../assets/imgs/clientes/aurora-borealis.png";
import magnata from "../../../assets/imgs/clientes/magnata.png";
import bits from "../../../assets/imgs/clientes/67-bits.png";
import urbia from "../../../assets/imgs/clientes/urbia.webp";
import vettura from "../../../assets/imgs/clientes/vettura.png";
import hol from "../../../assets/imgs/clientes/hol.png";
import aurora from "../../../assets/imgs/clientes/aurora.jpg";
import salsa from "../../../assets/imgs/clientes/salsa.png";

const ClientesJSON = [
  {
    img: globo,
    name: "TV Globo",
  },
  {
    img: sbt,
    name: "SBT",
  },
  {
    img: bbb,
    name: "BBB",
  },
  {
    img: nestle,
    name: "Nestlé",
  },
  {
    img: theTown,
    name: "The Town",
  },
  {
    img: lollapalooza,
    name: "Lollapalooza",
  },
  {
    img: interlagos,
    name: "Autódromo Interlagos",
  },
  {
    img: cinemaNosso,
    name: "Cinema Nosso",
  },
  {
    img: miniclip,
    name: "Miniclip",
  },
  {
    img: movipar,
    name: "Movipar",
  },
  {
    img: auroraBorealis,
    name: "Aurora Borealis",
  },
  {
    img: magnata,
    name: "Magnata",
  },
  {
    img: bits,
    name: "67 Bits",
  },
  {
    img: urbia,
    name: "Urbia",
  },
  {
    img: vettura,
    name: "Vettura",
  },
  {
    img: hol,
    name: "Hol",
  },
  {
    img: aurora,
    name: "Aurora",
  },
  {
    img: salsa,
    name: "Salsa",
  },
];

function Customers() {
  return (
    <div id="scrollspyHeading3" className="container mt-5">
      <div className="row">
        <h1 className="text-center mb-3">Nossos Clientes</h1>
      </div>
      <div className="row justify-content-center gy-4 px-3">
        {ClientesJSON.map((cliente, index) => (
          <div
            key={index}
            className="col-2 col-md-custom d-flex justify-content-center align-items-center"
          >
            <img
              src={cliente.img}
              alt={`logo ${cliente.name}`}
              className="w-100"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title={cliente.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;

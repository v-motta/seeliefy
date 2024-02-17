import React from "react";
import { ClientesJSON } from "./list";

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

import React from "react";

import logo from "../../assets/imgs/logo.png";
import br from "../../assets/imgs/br.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-seeliefy fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-0 ms-lg-5" href="#scrollspyHeading1">
          <img src={logo} alt="Bootstrap" width="" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-end"
          id="navbarTogglerDemo01"
        >
          <ul className="nav nav-pills flex-column flex-lg-row">
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">
                Portifolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading3">
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading4">
                Contato
              </a>
            </li>
            <li>
              <div className="dropdown ms-0 ms-lg-5">
                <button
                  className="dropdown-toggle nav-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={br} alt="bandeira do Brasil" width="20" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#pt-br">
                      Pt-Br
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

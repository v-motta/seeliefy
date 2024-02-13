import React from "react";

import logo from "../../assets/imgs/logo.png";
import br from "../../assets/imgs/br.png";

function Navbar() {
  return (
    <nav id="navbar-example2" className="navbar bg-seeliefy fixed-top">
      <a className="navbar-brand ms-5" href="#scrollspyHeading1">
        <img src={logo} alt="Bootstrap" width="" height="50" />
      </a>
      <ul className="nav nav-pills">
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
          <div className="dropdown ms-5">
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
    </nav>
  );
}

export default Navbar;

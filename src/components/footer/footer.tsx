import React from "react";

function Footer() {
  return (
    <div className="bg-seeliefy d-flex flex-column flex-lg-row align-items-center justify-content-lg-between text-white py-5 px-4 position-relative">
      <div className="d-flex align-items-center mb-2 mb-lg-0">
        <span className="fs-5 fst-italic">&#x00A9; Seeliefy 2023 - 2024</span>
      </div>
      <div className="d-flex flex-column flex-lg-row align-items-center">
        <span className="me-lg-4 mb-3 mb-lg-0 fs-6">contato@seeliefy.com</span>
        <div className="social-medias d-flex align-items-center fs-5">
          <a
            className="text-white"
            href="https://twitter.com/seeliefy"
            aria-label="Twitter da Seeliefy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter m-2"></i>
          </a>
          <a
            className="text-white"
            href="https://www.instagram.com/seeliefy"
            aria-label="Instagram da Seeliefy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram m-2"></i>
          </a>
          <a
            className="text-white"
            href="https://www.youtube.com/@Seeliefy"
            aria-label="Youtube da Seeliefy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube m-2"></i>
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/company/seeliefy/"
            aria-label="Linkedin da Seeliefy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin m-2"></i>
          </a>
          <a
            className="text-white"
            href="https://tiktok.com/@seeliefy"
            aria-label="Tiktok da Seeliefy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

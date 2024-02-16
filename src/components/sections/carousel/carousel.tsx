import React from "react";

import banner1 from "../../../assets/imgs/banner-1.webp";
import banner2 from "../../../assets/imgs/banner-2.webp";
import banner3 from "../../../assets/imgs/banner-3.webp";
import banner4 from "../../../assets/imgs/banner-4.webp";
import banner5 from "../../../assets/imgs/banner-5.webp";

function Carousel() {
  return (
    <div id="scrollspyHeading1" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#scrollspyHeading1"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#scrollspyHeading1"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#scrollspyHeading1"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#scrollspyHeading1"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#scrollspyHeading1"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner5} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#scrollspyHeading1"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#scrollspyHeading1"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg2.jpg"
          className="card-img image"
          alt="Background"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;

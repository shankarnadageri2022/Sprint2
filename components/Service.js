import React from "react";
import ServiceNavBar from "./NavBar/ServiceNavBar";
import Engine from "../images/engine.jpg"
import Painting from "../images/painting.jpg"
import Sound from "../images/sound-modulation.jpg"
function Service() {
  return (
    <div>
      <ServiceNavBar />

      <div style={{paddingTop: "60px" }}>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
        <div>
          <h3>Trending Services....!</h3>
        </div>
      <div className="card-deck">
        <div className="card">
          <img style={{height:"289px"}} src={Engine} className="card-img-top" alt="Engine Image"  />
          <div className="card-body">
            <h5 className="card-title">Engine Repair</h5>
            <p className="card-text">
              Price:Rs 4000.0 
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Painting} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Daiting And painting</h5>
            <p className="card-text">
             Price:Rs 5000.0
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 1 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Sound} className="card-img-top" alt="..." />
          <div classNameName="card-body">
            <h5 className="card-title">Sound Modulation</h5>
            <p className="card-text">
             Price:Rs 6000.0
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Service;

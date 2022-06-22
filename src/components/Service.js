import React from "react";
import ServiceNavBar from "./NavBar/ServiceNavBar";
import Engine from "../images/engine.jpg";
import Sound from "../images/sound-modulation.jpg";
import Painting from "../images/painting.jpg";
import { Link } from "react-router-dom";



function Service() {
  return (
    <div className="container">
    <ServiceNavBar />

      <div style={{marginTop:"70px"}}>
        <h3>Trending Services....!</h3>
      </div> <br/>
    <div className="card-deck">
      <div className="card">
        <img style={{height:"265px"}} src={Engine} className="card-img-top" alt="Engine Image"  />
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
     <br/>
    <div>
    <button type="button" class="btn btn-light"><Link to="/home">Back</Link></button>
    </div>

  </div>
  );
}

export default Service;

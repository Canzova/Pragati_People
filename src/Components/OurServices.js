import services from "../images/services.jpg";
import organizations from "../images/home-2.jpg";
import { Link } from "react-router-dom";
import React from "react";

const OurServices = () => {
  return (
    <div className="services_wrapper">
      <div className="header">
        <h1>Our Services</h1>
        <div>
          <span className="first_alpha">Y</span>our progress is our goal. We
          guide professionals to succeed in their careers.
        </div>
        <div>
          We consult with organizations to help them grow and transform.
          journey.
        </div>
      </div>
      <div className="our_services">
        <div className="who">
          <Link to={"/professionals"}>
            <img src={services} alt="" />
            <div className="upper_layer">
              <h1>Professionals</h1>
            </div>
          </Link>
        </div>

        <div className="what">
          <img src={organizations} alt="" />
          <div className="upper_layer">
            <h1>Organizations</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

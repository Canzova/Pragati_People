import services from "../images/services.jpg";
import organizations from "../images/home-2.jpg";
import { Link } from "react-router-dom";
import React from "react";

const OurServices = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };
  return (
    <div className="services_wrapper">
      <div className="header">
        <h1>Our Services</h1>
        <div className="main_heading">
          <span className="first_alpha">Y</span>our progress is our goal.
        </div>
        <div>We guide professionals to succeed in their careers.</div>
        <div>
          We consult with organizations to help them grow and transform.
        </div>
      </div>
      <div className="our_services" onClick={scrollToTop}>
        <div className="who">
          <Link to={"/professionals"}>
            <img src={services} alt="" />
            <div className="upper_layer">
              <h1>Professionals</h1>
            </div>
          </Link>
        </div>

        <div className="what">
          <Link to={"/organizations"}>
            <img src={organizations} alt="" />
            <div className="upper_layer">
              <h1>Organizations</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

import React from "react";
import { Link } from "react-router-dom";
import org1 from "../images/org1.jpg";
import org2 from "../images/org2.jpg";
const Organization = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };
  return (
    <div className="about_wrapper">
      <div className="header">
        <h1>Organizations</h1>
        <div className="main_heading">
          <span className="first_alpha">W</span>e help organizations in building and nurturing their teams.

        </div>
        {/* <div>
          Following the philosophy of{" "}
          <span className="career-pragati">yin-yang</span>,  we unite
          organizations and people together on a path towards shared progress.
        </div> */}
      </div>
      <div className="our_services" onClick={scrollToTop}>
        <div className="who">
          <img src={org1} alt="" />
          <div className="upper_layer">
            <h1>Hire Talent</h1>
          </div>
        </div>

        <div className="what" onClick={scrollToTop}>
          <Link to={"/testimonials"}>
            <img src={org2} alt="" />
            <div className="upper_layer">
              <h1>Nurture Talent</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Organization;

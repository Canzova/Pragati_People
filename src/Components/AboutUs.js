import { Link } from "react-router-dom";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };
  return (
    <div className="about_wrapper">
      <div className="header">
        <h1>About Us</h1>
        <div>
          <span className="first_alpha">W</span>e are bridge builders.
        </div>
        <div>
          Following the philosophy of <span className="career-pragati">yin-yang</span>,  we unite organizations and
          people together on a path towards shared progress.
        </div>
      </div>
      <div className="our_services" onClick={scrollToTop}>
        <div className="who">
          <img src={about1} alt="" />
          <div className="upper_layer">
            <h1>Our Journey</h1>
          </div>
        </div>

        <div className="what" onClick={scrollToTop}>
          <Link to={"/testimonials"}>
            <img src={about2} alt="" />
            <div className="upper_layer">
              <h1>Testimonials</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;

import home1 from "../images/HomeFixed1.jpg";
import home2 from "../images/HomeFixed2.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };
  return (
    <div className="home_wrapper">
      <div className="img_wrapper">
        <h1 className="propelling">Propelling</h1>
        <h1 className="progress">progress</h1>
      </div>
      <div className="home_data">
        <div className="career-pragati">
          A company built with a single point agenda - “Progress”
        </div>
        <div>
          Progress is a seemingly simple, yet profound concept- it means
          different things to different people.
        </div>
        <div>
          We work with a diverse group of individuals and organizations to chart
          a customized path to their progress.
        </div>
      </div>
      <div className="our_services home_services" onClick={scrollToTop}>
        <div className="who">
          <Link to={"/about"}>
            <img src={home1} alt="" />
            <div className="upper_layer">
              <h1>Who we are ?</h1>
            </div>
          </Link>
        </div>
        <div className="what" onClick={scrollToTop}>
          <Link to={"/ourservices"}>
            <img src={home2} alt="" />
            <div className="upper_layer">
              <h1>What we do ?</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="home_data">
        <div>
          If you’ve got a{" "}
          <span className="career-pragati phone_styling">
            north star
          </span>
          , we bring the{" "}
          <span className="career-pragati phone_styling">
            flight plan
          </span>
          .
        </div>
        <div>
          If you’ve got a{" "}
          <span className="career-pragati phone_styling">
            flight plan
          </span>
          , we bring{" "}
          <span className="career-pragati phone_styling">
            the fuel
          </span>
          .
        </div>
      </div>
    </div>
  );
};
export default Home;

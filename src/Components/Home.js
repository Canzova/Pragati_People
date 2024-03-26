import home1 from "../images/home-1.jpg";
import home2 from "../images/home-2.jpg";
import temp from "../images/rocket2.jpg";
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
            <img src={temp} alt="" />
            <div className="upper_layer">
              <h1>What we do ?</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;

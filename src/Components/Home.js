import home1 from "../images/home-1.jpg";
import home2 from "../images/home-2.jpg";
const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="img_wrapper">
        <h1 className="propelling">Propelling</h1>
        <h1 className="progress">progress</h1>
      </div>
      <div className="our_services">
        <div className="who">
          <img src={home1} alt="" />
          <div className="upper_layer">
            <h1>Who we are ?</h1>
          </div>
        </div>
        <div className="what">
          <img src={home2} alt="" />
          <div className="upper_layer">
            <h1>What we do ?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

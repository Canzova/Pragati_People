import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../images/Logo.jpg"
import { Link } from "react-router-dom";


const NavBar = () => {
  const handleOnclick = () => {
    //const hamburger = document.querySelector('.hamburger');
    let mobilenav = document.querySelector(".MobileNavBar-Wrapper");
    mobilenav.classList.add("open");
  };
  return (
    <div className="Nav-Wrapper">
      <div className="nav_logo">
        <img src={logo} alt="logo" className="logo_image" />
        <h1>PRAGATI &nbsp;People</h1>
      </div>
      <div className="nav_links">
        <ul className="nav_links_list">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/testimonials"}>
            <li>Testimonials</li>
          </Link>
          <Link to={"/professionals"}>
            <li>Candidates</li>
          </Link>
          <Link to={"/companies"}>
            <li>Companies</li>
          </Link>
          <Link to={"/contact"}>
            <li className="btn_primary">Get In Touch</li>
          </Link>
        </ul>
      </div>

      <RxHamburgerMenu onClick={handleOnclick} className="hamburger" />
    </div>
  );
};
export default NavBar;

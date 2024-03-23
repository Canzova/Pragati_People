import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../images/Logo.jpg"
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
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Testimonials</li>
          </a>
          <a href="">
            <li>Candidates</li>
          </a>
          <a href="">
            <li>Companies</li>
          </a>
          <a href="">
            <li className="btn_primary">Get In Touch</li>
          </a>
        </ul>
      </div>

      <RxHamburgerMenu onClick={handleOnclick} className="hamburger" />
    </div>
  );
};
export default NavBar;

import { RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
  const handleOnclick = () => {
    //const hamburger = document.querySelector('.hamburger');
    let mobilenav = document.querySelector(".MobileNavBar-Wrapper");
    mobilenav.classList.add("open");
  };
  return (
    <div className="Nav-Wrapper">
      <div className="nav_logo">
        <h1>PRAGATI &nbsp;PEOPLE</h1>
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

import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const MobileNavBar = () => {
  const handleOnclick = () => {
    let mobilenav = document.querySelector(".MobileNavBar-Wrapper");
    mobilenav.classList.remove("open");
  };
  return (
    <div className="MobileNavBar-Wrapper">
      <div className="MobileNavBar_logo">
        <h2>PRAGATI &nbsp;PEOPLE</h2>
        <RxCross2 className="cross-logo" onClick={handleOnclick} />
      </div>

      <ul className="MobileNavBar_links_list">
        <Link to={"/"}>
          <li onClick={handleOnclick}>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/testimonials"}>
          <li onClick={handleOnclick}>Testimonials</li>
        </Link>
        <Link to={"/professionals"}>
          <li onClick={handleOnclick}>Candidates</li>
        </Link>
        <Link to={"/companies"}>
          <li onClick={handleOnclick}>Companies</li>
        </Link>
        <Link to={"/contact"}>
          <li className="btn_primary" onClick={handleOnclick}>
            Get In Touch
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default MobileNavBar;

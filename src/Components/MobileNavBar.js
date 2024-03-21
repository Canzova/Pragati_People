import { RxCross2 } from "react-icons/rx";
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
          <li>Get In Touch</li>
        </a>
      </ul>
    </div>
  );
};
export default MobileNavBar;

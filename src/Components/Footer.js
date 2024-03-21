// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="contact_us">Contact Us</div>
      <div className="logos">
        <div className="linkedin" style={{ background: "white" }}>
          <a href="https://www.linkedin.com/in/sanjeev-nichani-684358a/" target="_blank">
            <FaLinkedinIn style={{ color: "#4D2A7C" }} />
          </a>
        </div>
        <div className="linkedin" style={{ background: "white" }}>
          <IoMdMail style={{ color: "#4D2A7C" }} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
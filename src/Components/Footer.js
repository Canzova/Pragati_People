// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="contact_us">Contact Us</div>
      <div className="logos">
        <div className="linkedin" style={{ background: "#4D2A7C" }}>
          <a
            href="https://www.linkedin.com/in/sanjeev-nichani-684358a/"
            target="_blank"
          >
            <FaLinkedinIn style={{ color: "white" }} />
          </a>
        </div>
        <div
          className="linkedin"
          style={{
            background: "#4D2A7C",
          }}
        >
          <a href="mailto:open.pragati@gmail.com" target="_blank">
            <IoMdMail
              style={{
                color: "white",
                position: "absolute",
                left: "19%",
                top: "22%",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;

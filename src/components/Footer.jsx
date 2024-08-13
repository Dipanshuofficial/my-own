import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import centerImage from "../assets/Self-confidence-bro.png";
import mailIcon from "../assets/mail.svg";
import "../styles/main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-circle"></div>
      <div className="footer-circle-small"></div>
      <div className="circle-content">
        <span className="logo-fuzz">Fuzz</span>
        <span className="logo-ads">Ads</span>
      </div>
      <div className="footer-tagline">
        <p>Your Brand Our Team</p>
      </div>
      <div className="footer-icons">
        <div className="footer-icon fb">
          <FaFacebookF />
        </div>
        <div className="footer-icon tw">
          <FaTwitter />
        </div>
        <div className="footer-icon ig">
          <FaInstagram />
        </div>
        <div className="footer-icon yt">
          <FaYoutube />
        </div>
      </div>
      <div className="footer-center">
        <img src={centerImage} alt="Center" className="center-image" />
      </div>
      <div className="footer-circle-bottom-right"></div>
      {/* New circle at the bottom right */}
      <div className="footer-links">
        <div className="footer-links-column-one ">
          <h1>Services</h1>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            {/* populate more items */}
          </ul>
        </div>
        <div className="footer-links-column-two">
          <h1>About</h1>
          <ul>
            <li>Terms & Conditions</li>
            <li>Return & Refund</li>
            {/* populate more items */}
          </ul>
        </div>
      </div>
      <span className="bg-white px-3 py-2 rounded-full absolute left-5 bottom-5 font-semibold flex">
        <img src={mailIcon} alt="mail" className="pr-2" />
        support@fuzzads.com
      </span>
    </footer>
  );
};

export default Footer;

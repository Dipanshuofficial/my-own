import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import "../styles/main.css";
import hamIcon from "../assets/hamburger.svg";
import close from "../assets/close.svg";
const Navbar = () => {
  const [openClose, setOpenClose] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="ham" onClick={() => setOpenClose(!openClose)}>
          <img
            src={openClose ? close : hamIcon}
            alt="Menu"
            className={`transition-transform duration-300 ease-in-out ${
              openClose ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div className="navbar-logo max-lg:text-2xl">
          <span className="logo-fuzz">Fuzz</span>
          <span className="logo-ads">Ads</span>
        </div>
        <ul
          className={`navbar-menu max-md:fixed top-0 max-md:left-0 max-md:h-full max-md:w-1/2 transform transition-transform duration-300 ease-in-out ${
            openClose ? "max-md:translate-x-0" : "max-md:-translate-x-full"
          }`}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/plans" className="nav-link">
            <a href="#plans">Plans</a>
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </ul>
        <div className="navbar-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

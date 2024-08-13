// src/pages/Services.js

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.css";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Our Services</h1>
        <p>Details about services offered by the company.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

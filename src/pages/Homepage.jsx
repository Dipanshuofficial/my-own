import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import PricingCards from "../components/PricingCards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/main.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PricingCards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;

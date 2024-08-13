import { useState, useEffect } from "react";
import "../styles/hero.css";
import heroImage from "../assets/hero.jpeg"; // Adjust the path as needed
import icon1 from "../assets/web-traffic.png"; // Example icon path
import icon2 from "../assets/brand-networking.png"; // Example icon path
import icon3 from "../assets/website.png"; // Example icon path
import "../styles/main.css";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLimitedTime, setIsLimitedTime] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const startOfMonth = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      20
    );
    const endOfMonth = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      30
    );

    if (currentTime >= startOfMonth && currentTime <= endOfMonth) {
      setIsLimitedTime(true);
    } else {
      setIsLimitedTime(false);
    }

    return () => clearInterval(timer);
  }, [currentTime]);

  const getTimeLeft = () => {
    const endOfMonth = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      30,
      23,
      59,
      59
    );
    const timeLeft = endOfMonth - currentTime;
    if (timeLeft <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeLeft();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="social-icons">
          <div className="icon-box facebook">
            <i className="fab fa-facebook-f"></i>
            <span>FACEBOOK</span>
          </div>
          <div className="icon-box twitter">
            <i className="fab fa-twitter"></i>
            <span>TWITTER</span>
          </div>
          <div className="icon-box instagram">
            <i className="fab fa-instagram"></i>
            <span>INSTAGRAM</span>
          </div>
          <div className="icon-box linkedin">
            <i className="fab fa-linkedin-in"></i>
            <span>LINKEDIN</span>
          </div>
          <div className="icon-box github">
            <i className="fab fa-github"></i>
            <span>GITHUB</span>
          </div>
          <div className="icon-box youtube">
            <i className="fab fa-youtube"></i>
            <span>YOUTUBE</span>
          </div>
        </div>
        <div className="hero-text max-md:mt-40">
          <h2 className="subheading">Subheading</h2>
          <p className="details">Content</p>
          <p className="pricing">
            <span className="discounted-price">5000/mo</span>
            <span className="original-price">7000/mo</span>
          </p>
          <div className="hero-buttons">
            <button className="start-now">Start Now</button>
            {isLimitedTime && (
              <button className="timer">
                {days} : {hours} : {minutes} : {seconds}
              </button>
            )}
          </div>
          {isLimitedTime && (
            <div className="limited-time-deal">
              <span>⏰</span> <span>Limited time deal</span>
            </div>
          )}
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

      <div className="support-features">
        <h2 className="support-heading">Our Support Features</h2>
        <div className="support-icons">
          <div className="support-icon">
            <img src={icon1} alt="Feature 1" />
            <h3>Traffic</h3>
            <p>Boost social media traffic with advanced analytical tools</p>
          </div>
          <div className="support-icon">
            <img src={icon2} alt="Feature 2" />
            <h3>Branding</h3>
            <p>
              Effortlessly enhance branding with customizable design templates
              and tools
            </p>
          </div>
          <div className="support-icon">
            <img src={icon3} alt="Feature 3" />
            <h3>Website</h3>
            <p>Create your website easily with intutive site building tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState } from "react";
import "../styles/contact.css";
import contactimg from "../assets/contact.png";
import axios from "axios";
import "../styles/main.css";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact", formData)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message");
        console.error("There was an error!", error);
      });
  };

  return (
    <section className="contact-section">
      {/* <div className="contact-form">
        <h2 className="contact-heading">
          <span className="heading-line1">Let&apos;s</span>
          <br />
          <span className="heading-line2">Get Started</span>
        </h2>
        </div> */}
      <div className="contact-form bg-white rounded-3xl shadow-xl shadow-slate-500 max-md:shadow-transparent">
        <div className="contact-heading flex flex-col">
          <span className="heading-line1">Get In Touch</span>
          <span className="heading-line2">You Can Reach Us Anytime</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              className="form-input"
              value={formData.fname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="form-input"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row relative">
            <textarea
              name="message"
              placeholder="How Can We Help?"
              className="form-input"
              value={formData.message}
              onChange={(e) => {
                setCount(e.target.value.length);
                handleChange(e);
              }}
              maxLength={120}
              required
            ></textarea>
            <span className="absolute right-0 bottom-0 px-10 py-6 z-10">
              {count}/120
            </span>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-image">
        <img className="contact-img" src={contactimg} alt="contact" />
      </div>
    </section>
  );
};

export default Contact;

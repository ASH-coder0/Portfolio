// src/components/portfolio/Contact.js
import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  // FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted! In a real app, this would send the message.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="divider"></div>
        <p>Have a project in mind? Let's work together!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h4>Email</h4>
            <p>ashwingautum19@gmail.com</p>
            <a href="mailto:ashwingautum19@gmail.com">Send Message</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h4>GitHub</h4>
            <p>@ASH-coder0</p>
            <a
              href="https://github.com/ASH-coder0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h4>Location</h4>
            <p>Butwal-01, Rupandehi, Nepal</p>
            <a
              href="https://www.google.com/maps/dir//PF66%2BPRM+Butwal+Municipality+Office,+Butwal+ward+no.-1,+Butwal+32907/@27.7037392,83.4240199,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3996870e376a3bf3:0x1d7322bb890e5228!2m2!1d83.4620441!2d27.7118334?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

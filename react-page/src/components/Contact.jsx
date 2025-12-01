import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h1>Get in Touch</h1>
      <p>We'd love to hear from you. Send us a message!</p>
      
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
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
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-card">
            <h3>Email</h3>
            <p>fikayo@gmail.com</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>+234</p>
          </div>
          <div className="info-card">
            <h3>Address</h3>
            <p>Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

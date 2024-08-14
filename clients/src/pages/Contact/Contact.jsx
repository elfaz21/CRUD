// ContactPage.js
import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form-container">
          <h1 className="contact-title">Get in Touch</h1>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info-container">
          <h2 className="contact-subtitle">Contact Information</h2>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+251 088 455 154</span>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>info@example.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>kazanchis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

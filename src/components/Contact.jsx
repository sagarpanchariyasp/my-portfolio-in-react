import React from "react";
import "../App.css"; // Assuming custom styles for this component

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9649613344</p>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>sagarpanchariya160@gmail.com</p>
                </div>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Jodhpur, Rajasthan, India</p>
                </div>
              </li>
            </ul>
            <div className="social-links">
              <button className="button">
                <a
                  href="https://www.instagram.com/sagar_panchariya_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </button>
              <button
                className="button"
                style={{ background: "#25D366" }}
              >
                <a
                  href="https://wa.me/9649613344"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </button>
              <button className="button">
                <a
                  href="https://in.linkedin.com/in/sagar-panchariya-1a0a73176"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </button>
              <button className="button">
                <a
                  href="https://github.com/jimmy01010011"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form
              id="contactForm"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="ac8cc81c-cc28-4113-9bf6-e1bd79dc7742"
              />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

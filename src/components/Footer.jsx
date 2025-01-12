import React from "react";
import "./Footer.css"; // For custom styles

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Footer Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Sagar Panchariya</h2>
            <p>
              Full-stack Developer | Innovator | Lifelong Learner. Passionate
              about crafting modern, scalable, and user-friendly web
              applications.
            </p>
            <p>Email: sagarpanchariya160@gmail.com </p>
           <p>Mobile: +919649613344</p>
          </div>    
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="https://sagarpanchariya.online" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect with Me</h4>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/sagar_panchariya_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/9649613344"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://in.linkedin.com/in/sagar-panchariya-1a0a73176"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/jimmy01010011"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sagar Panchariya. All rights reserved.{" "}
            <span>Designed and Developed with ❤️</span>
          </p>
          <p>
            <a href="#privacy-policy" className="footer-link">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#terms-conditions" className="footer-link">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

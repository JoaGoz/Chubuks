import React from "react";
import "../assets/styles.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© Derechos reservados por ChuBucks</p>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-columns">
        {[1, 2, 3].map((col) => (
          <div className="footer-column" key={col}>
            <h4>Topic</h4>
            <ul>
              <li><a href="/">Page</a></li>
              <li><a href="/">Page</a></li>
              <li><a href="/">Page</a></li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import '../pages/Home.css'
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
    
        <Link to="/" className="footer-link">Home</Link> |{" "}
        <Link to="/contact" className="footer-link">Contact</Link>
      <p className="footer-text">© 2025 Aditi. All rights reserved.</p>
      <ul className="social-links">
        <li className="link"><FaInstagram/>Instagram</li>
        <li className="link"><FaFacebook/>Facebook</li>
        <li className="link"><FaGithub/>Github</li>
        
      </ul>
    
    </footer>
  );
}



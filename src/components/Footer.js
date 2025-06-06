import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="footer-link">Home</Link> |{" "}
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <p>© 2025 Aditi. All rights reserved.</p>
    </footer>
  );
}

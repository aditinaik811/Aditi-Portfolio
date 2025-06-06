import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Aditi</div>
      <div className="navbar-links">
        <NavLink to="/home" className="nav-link" activeclassname="active-link">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeclassname="active-link">About</NavLink>
        <NavLink to="/skills" className="nav-link" activeclassname="active-link">Skills</NavLink>
        <NavLink to="/projects" className="nav-link" activeclassname="active-link">Projects</NavLink>
        <NavLink to="/achievements" className="nav-link" activeclassname="active-link">Achievements</NavLink>
        <NavLink to="/resume" className="nav-link" activeclassname="active-link">Resume</NavLink>
        <NavLink to="/contact" className="nav-link" activeclassname="active-link">Contact</NavLink>
        <NavLink to="/contact" className="nav-link" activeclassname="active-link">hh</NavLink>
        
      </div>
    </nav>
  );
}

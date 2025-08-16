import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { useLayoutEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navbar-name">
        <h1>ARN</h1>
      </div>
      <div className="navbar-links">
        <Link to="/home" className={location.pathname==='/home'?"nav-active-link":"nav-link"}><span className="dot">.</span><i className="fa-solid fa-house"></i>Home<span className="dot">.</span></Link>
        <Link to="/about"  className={location.pathname==='/about'?"nav-active-link":"nav-link"}><span className="dot">.</span><i class="fa-solid fa-address-card"></i>About<span className="dot">.</span></Link>
        <Link to="/education"  className={location.pathname==='/education'?"nav-active-link":"nav-link"}><span className="dot">.</span><i class="fa-solid fa-book"></i>Education<span className="dot">.</span></Link>
        <Link to="/skills" className={location.pathname==='/skills'?"nav-active-link":"nav-link"}><span className="dot">.</span><i class="fa-solid fa-brain"></i>Skills<span className="dot">.</span></Link>
        <Link to="/projects" className={location.pathname==='/projects'?"nav-active-link":"nav-link"}><span className="dot">.</span><i class="fa-solid fa-diagram-project"></i>Projects<span className="dot">.</span></Link>
        <Link to="/achievements" className={location.pathname==='/achievements'?"nav-active-link":"nav-link"}><span className="dot">.</span><i class="fa-solid fa-shield-halved"></i>Achievements<span className="dot">.</span></Link>
        <Link to="/resume" className={location.pathname==='/resume'?"nav-active-link":"nav-link"}><span className="dot">.</span><i class="fa-solid fa-file"></i>Resume<span className="dot">.</span></Link>
        <Link to="/contact"className={location.pathname==='/contact'?"nav-active-link":"nav-link"}><span className="dot">.</span><i class="fa-solid fa-phone-volume"></i>Contact<span className="dot">.</span></Link>   
      </div>
    </div>
  );
}

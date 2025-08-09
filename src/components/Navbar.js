import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-name">
        <h1>ARN</h1>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="nav-link"><i className="fa-solid fa-house"></i>Home</Link>
        <Link to="/about" className="nav-link"><i class="fa-solid fa-address-card"></i>About</Link>
        <Link to="/education" className="nav-link"><i class="fa-solid fa-book"></i>Education</Link>
        <Link to="/skills" className="nav-link"><i class="fa-solid fa-brain"></i>Skills</Link>
        <Link to="/projects" className="nav-link"><i class="fa-solid fa-diagram-project"></i>Projects</Link>
        <Link to="/achievements" className="nav-link"><i class="fa-solid fa-shield-halved"></i>Achievements</Link>
        <Link to="/resume" className="nav-link"><i class="fa-solid fa-file"></i>Resume</Link>
        <Link to="/contact" className="nav-link"><i class="fa-solid fa-phone-volume"></i>Contact</Link>   
      </div>
    </div>
  );
}

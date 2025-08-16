import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-name">
        <h1>ARN</h1>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="nav-link"><span className="dot">.</span><i className="fa-solid fa-house"></i>Home<span className="dot">.</span></Link>
        <Link to="/about" className="nav-link"><span className="dot">.</span><i class="fa-solid fa-address-card"></i>About<span className="dot">.</span></Link>
        <Link to="/education" className="nav-link"><span className="dot">.</span><i class="fa-solid fa-book"></i>Education<span className="dot">.</span></Link>
        <Link to="/skills" className="nav-link"><span className="dot">.</span><i class="fa-solid fa-brain"></i>Skills<span className="dot">.</span></Link>
        <Link to="/projects" className="nav-link"><span className="dot">.</span><i class="fa-solid fa-diagram-project"></i>Projects<span className="dot">.</span></Link>
        <Link to="/achievements" className="nav-link"><span className="dot">.</span><i class="fa-solid fa-shield-halved"></i>Achievements<span className="dot">.</span></Link>
        <Link to="/resume" className="nav-link"><span className="dot">.</span><i class="fa-solid fa-file"></i>Resume<span className="dot">.</span></Link>
        <Link to="/contact" className="nav-link"><span className="dot">.</span><i class="fa-solid fa-phone-volume"></i>Contact<span className="dot">.</span></Link>   
      </div>
    </div>
  );
}

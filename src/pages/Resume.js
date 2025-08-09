import resumeThumbnail from '../assets/aditi_resume.png'; 
import resumePDF from '../assets/Aditi_Ravindra_Naik_Fresher_Resume.pdf';
import './Resume.css';
import Footer from '../components/Footer';
export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>

      <div className="resume-card">
        <img 
          src={resumeThumbnail} 
          alt="Resume Thumbnail" 
          className="resume-thumbnail" 
        />
        <div className="resume-actions">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">View</a>
          <a href={resumePDF} download>Download</a>
        </div>
      </div>
  
    </div>
  );
}

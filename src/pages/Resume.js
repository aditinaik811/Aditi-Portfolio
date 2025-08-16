

import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>

      <div className="resume-card">
        <img 
          src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/resume_thumnail.png"
          alt="Resume Thumbnail" 
          className="resume-thumbnail" 
        />
        <div className="resume-actions">
          <a href="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/Aditi_Ravindra_Naik_Resume.pdf" target="_blank" rel="noopener noreferrer">View</a>
          <a href="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/Aditi_Ravindra_Naik_Resume.pdf" download>Download</a>
        </div>
      </div>
  
    </div>
  );
}

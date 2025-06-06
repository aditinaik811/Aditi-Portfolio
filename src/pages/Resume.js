import React from "react";
import resumeThumbnail from '../assets/aditi_resume.png'; // Replace with actual preview image
import resumePDF from '../assets/Aditi_Ravindra_Naik_Fresher_Resume.pdf'; // Replace with actual resume file

export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>

      <div className="resume-card">
        <img src={resumeThumbnail} alt="Resume Thumbnail" className="resume-thumbnail" />
        <div className="resume-info">
          <h3>Aditi's Resume</h3>
          <p>Updated: May 2025</p>
          <div className="resume-buttons">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-button">View</a>
            <a href={resumePDF} download className="resume-button">Download</a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import './Skills.css'



export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-grid">
        <div className="skill-card">
          <h2 className="skill-heading">Programming Languages</h2>
          <div className="skill-items">
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/java.png" alt="Java" /> Java</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cp.png" alt="C" /> C</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Web Development</h2>
          <div className="skill-items">
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/html.png" alt="HTML" /> HTML</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/css.png" alt="CSS" /> CSS</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/javascript.png" alt="JavaScript" /> JavaScript</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/react.png" alt="React" /> React</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/node.png" alt="Node" /> Node</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Database Management System</h2>
          <div className="skill-items">
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/mysql.png" alt="MySQL" /> MySQL</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/mongodb.png" alt="MongoDB" /> MongoDB</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Cloud & DevOps</h2>
          <div className="skill-items">
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/aws.png" alt="AWS" /> AWS</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/docker.png" alt="Docker" /> Docker</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/jenkins.png" alt="Jenkins" /> Jenkins</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/kubernetes+.png" alt="Kubernetes" /> Kubernetes</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">UI/UX</h2>
          <div className="skill-items">
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/figma.png" alt="Figma" /> Figma</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/canva.png" alt="Canva" /> Canva</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Version Control System</h2>
          <div className="skill-items">
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/git.png" alt="Git" /> Git</div>
            <div className="skill-item"><img src="https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/github.png" alt="GitHub" /> GitHub</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Soft Skills</h2>
          <div className="skill-items">
            <div className="skill-item">Proficiency in English Communication</div>
            <div className="skill-item">Project Management</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import java from '../assets/java.png';
import cp from '../assets/cp.png';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';

import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.png';

import aws from '../assets/aws.png';
import docker from '../assets/docker.png';
import jenkins from '../assets/jenkins.png';
import kubernetes from '../assets/kubernetes .png';

import figma from '../assets/figma.png';
import canva from '../assets/canva.png';

import git from '../assets/git.png';
import github from '../assets/github.png';

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skill-page-heading">Skills Section</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h2 className="skill-heading">Programming Languages</h2>
          <div className="skill-items">
            <div className="skill-item"><img src={java} alt="Java" /> Java</div>
            <div className="skill-item"><img src={cp} alt="C" /> C</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Web Development</h2>
          <div className="skill-items">
            <div className="skill-item"><img src={html} alt="HTML" /> HTML</div>
            <div className="skill-item"><img src={css} alt="CSS" /> CSS</div>
            <div className="skill-item"><img src={javascript} alt="JavaScript" /> JavaScript</div>
            <div className="skill-item"><img src={react} alt="React" /> React</div>
            <div className="skill-item"><img src={node} alt="Node" /> Node</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Database Management System</h2>
          <div className="skill-items">
            <div className="skill-item"><img src={mysql} alt="MySQL" /> MySQL</div>
            <div className="skill-item"><img src={mongodb} alt="MongoDB" /> MongoDB</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Cloud & DevOps</h2>
          <div className="skill-items">
            <div className="skill-item"><img src={aws} alt="AWS" /> AWS</div>
            <div className="skill-item"><img src={docker} alt="Docker" /> Docker</div>
            <div className="skill-item"><img src={jenkins} alt="Jenkins" /> Jenkins</div>
            <div className="skill-item"><img src={kubernetes} alt="Kubernetes" /> Kubernetes</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">UI/UX</h2>
          <div className="skill-items">
            <div className="skill-item"><img src={figma} alt="Figma" /> Figma</div>
            <div className="skill-item"><img src={canva} alt="Canva" /> Canva</div>
          </div>
        </div>

        <div className="skill-card">
          <h2 className="skill-heading">Version Control System</h2>
          <div className="skill-items">
            <div className="skill-item"><img src={git} alt="Git" /> Git</div>
            <div className="skill-item"><img src={github} alt="GitHub" /> GitHub</div>
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

import React from "react";
import './About.css'
export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about">
            <h1 className="about-box-heading">About Me</h1>
            <p className="about-box-body">Computer Science Engineering student with experience in Java Programming Language, Full Stack Web Development (MERN Stack), Machine Learning , UI/UX design,Cloud Computing Technologies.</p>
      </div>
      <div className="about">
          <h1 className="about-box-heading">Education</h1>
          <h3>St Joseph Engineering College Vamanjoor, Manglore</h3>
          <ol>
            <li>III Year CGPA : </li>
            <li>II Year CGPA  : </li>
            <li>I Year CGPA   : </li>
          </ol>
          <h3>Government PU College, Karwar</h3>
          <ol>
            <li>Karnataka Pre-University Education</li>
            <li>II PUC Boards Percentage  : 95.67%</li>
          </ol>
          <h3>St Michael's Convent High School Karwar</h3>
          <ol>
            <li>Karnataka State Board</li>
            <li>X Boards Percentage :94.72%</li>
          </ol>
      </div>
      <div className="about">
          <h1 className="about-box-heading">Long Term Goals</h1>
          <p className="about-box-body">I aim to build deep, practical expertise across multiple technology domains — including web development, mobile apps, cloud computing, AI/ML, DevOps, and emerging technologies — by working on real projects and contributing to open source. This will enable me to adapt quickly, collaborate effectively, and deliver value in diverse tech environments.</p>
      </div>
    </div>
  );
}

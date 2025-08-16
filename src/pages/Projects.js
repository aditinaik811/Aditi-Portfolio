import React, { useState } from "react";
import { Link } from "react-router-dom";
import cloudKitchen from '../assets/cloudKitchen.png';
import Botany from '../assets/Botany.png';
import slamBook from "../assets/slamBook.png";
import weatherApp from '../assets/weatherApp.png';
import ack from "../assets/ack.png"
import music_web from "../assets/music_web.png";
import quotes from "../assets/quotes.png";
import blog from "../assets/blog.png"
import calculator from '../assets/calculator.png';
import scientificCalculator from '../assets/scientificCalculator.png';
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    image:ack,
    title:"Aditi's Cloud Kitchen",
    description:"A full-stack food ordering web application where users can browse dishes by category, add them to a cart, and place orders. Users can sign up, log in securely, and save delivery addresses for future orders. The app is built using the MERN  stack (MongoDB, Express.js, React.js, Node.js).It uses Cloudinary for image uploads and Razorpay for secure online",
    techStack:"MERN|Cloudinary|Razorpay",
    github:"https://github.com/aditinaik811/aditi-cloud-kitchen-backend",
    live:"https://aditi-cloud-kitchen-frontend.vercel.app/",
  },
  {
    image:music_web,
    title:"Harmony Hub Music Streaming Web App",
    description:"A responsive music streaming platform built with React, featuring artist-based navigation, song search, and audio playback. Users can explore songs by artist or title, with music files securely hosted on AWS S3. The app uses Firebase for user authentication. ",
    techStack:"Firebase|React|AWS(S3)",
    github:"https://github.com/aditinaik811/aditi-cloud-kitchen-backend",
    live:"https://music-web-vsy5.vercel.app/",
  },
  {
    image:quotes,
    title:"Multilingual Quotes Generator",
    description:"A webpage that lets you select quote from a vast set of regional languages along with some popular international languages along with their translations.",
    techStack:"React|JSON Files",
    github:"https://github.com/aditinaik811/Multilingual-Qoutes-Generator",
    live:"https://multilingual-qoutes-generator.vercel.app/",
  },

  {
    image:blog,
    title:"Blog Website",
    description:"A full-stack blogging platform where the admin can create and manage blog posts, and users can read content and post comments. Built using MERN stack with Firebase Authentication, Firebase Firestore for storing blog data and comments, and Firebase Storage for managing images.",
    techStack:"MERN|Firestore|Firebase Database",
    github:"https://github.com/aditinaik811/aditi-blog-frontend",
    live:"https://aditi-blog-frontend.vercel.app/",
  },
  
  {
    image: cloudKitchen,
    title: "Aditi's Cloud Kitchen",
    description: "Designed and developed a front-end website for a home-based cloud kitchen to showcase menu offerings and enable online ordering. Implemented core features including food item display, add-to-cart functionality, and total price calculation.",
    techStack: "Tech Stack: HTML, CSS, JavaScript.",
    github: "https://github.com/yourusername/portfolio",
    live: "#",
  },
  {
    image: Botany,
    title: "Plant Pedia",
    description: "Plant Pedia is an interactive web application that helps plant lovers and gardeners access detailed information about various plants, including watering needs, soil preferences, sunlight requirements, and more.",
    techStack: "Tech Stack: React, CSS ",
    github: "https://github.com/yourusername/ecommerce",
    live: "#",
  },
  {
    image: slamBook,
    title: "Digital Slam Book",
    description: "Digital Slam Book Web App is a digital version of the classic slam book, developed using PHP and MySQL. It allows users to insert, view, update, and delete entries making it easy to collect and manage personalized responses from friends.",
    techStack: "Tech Stack: PHP, MySQL, XAMPP, HTML, CSS ",
    github: "https://github.com/yourusername/chat-app",
    live: "#",
  },
  {
    image: weatherApp,
    title: "Weather App",
    description: "Built a dynamic webpage that fetches and displays real-time weather data for any city using a public weather API.",
    techStack: "Tech Stack: HTML, CSS, JavaScript, Weather API.",
    github: "https://github.com/yourusername/chat-app",
    live: "#",
  },
  {
    image: scientificCalculator,
    title: "Scientific Calculator",
    description: "A fully-featured scientific calculator web app built using Vue.js. It supports arithmetic, scientific functions, number system conversions, and fraction/decimal toggling with a stylish, responsive UI.",
    techStack: "Tech Stack: Vue.js, CSS, Vite, and fraction.js.",
    github: "https://github.com/yourusername/chat-app",
    live: "#",
  },
  {
    image: calculator,
    title: "Calculator",
    description: "A calculator that performs simple arithmetic operations.",
    techStack: "HTML, CSS, Javascript",
    github: "https://github.com/yourusername/chat-app",
    live: "#",
  }
];

export default function Projects() {
  const [expanded, setExpanded] = useState({});
  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollLeft = () => {
    document.getElementById("carouselTrackProjects").scrollLeft -= 320;
  };

  const scrollRight = () => {
    document.getElementById("carouselTrackProjects").scrollLeft += 320;
  };

  return (
    <div className="projects-container">
      <div className="carousel-wrapper">
        <button className="carousel-button left" onClick={scrollLeft}>❮</button>
        <div className="carousel-track" id="carouselTrackProjects">
          {projectsData.map((project, index) => {
            const isExpanded = expanded[index];
            const shortDesc = project.description.length > 100
              ? project.description.slice(0, 100) + "..."
              : project.description;
            return (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-thumbnail" />

                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <FaGithub className="icon" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <FaExternalLinkAlt className="icon" />
                    </a>
                  </div>
                </div>

                <p>{isExpanded ? project.description : shortDesc}</p>
                {project.description.length > 100 && (
                  <button className="read-more" onClick={() => toggleReadMore(index)}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
                <p className="tech-stack">{project.techStack}</p>
              </div>
            );
          })}
        </div>
        <button className="carousel-button right" onClick={scrollRight}>❯</button>
      </div>
    </div>
  );
}

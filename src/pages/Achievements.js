import React, { useState } from "react";
import './Achievements.css'

export default function Certificates() {
  const [modalImage, setModalImage] = useState(null);

  const certificates = [
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert1.png",
      title: "Introduction to Blockchain and Ethereum",
      organization: "Infosys|Springboard",
      date: "November 23 2024"
    },
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert2.png",
      title: "Hyperledger for Blockchain Applications",
      organization: "Infosys|Springboard",
      date: "November 24 2024"
    },
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert3.png",
      title: "Solidity Smart Contract Programming for Ethereum Blockchain",
      organization: "Infosys|Springboard",
      date: "November 26 2024"
    },
    {
      image:"https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert4.png",
      title: "Advanced Data Structures & Algorithms in Java : Sorting & Searching Algorithms",
      organization: "Infosys|Springboard",
      date: "May 19 2024"
    },
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert5.png",
      title: "First Step Korean",
      organization: "Coursera",
      date: "Nov 2 2023"
    },
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert6.png",
      title: "Bash Scripting and Shell Programming (Linux Command Line)",
      organization: "Infosys|Springboard",
      date: "February 28 2024"
    },
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert7.png",
      title: "Getting Started with Go Programming Language",
      organization: "Infosys|Springboard",
      date: "Mar 30 2025"
    },
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert8.png",
      title: "Stratergic Self Marketing and Personal Branding",
      organization: "Coursera",
      date: "April 27 2024"
    },
    {
      image: "https://aditi-portfolio-images-s3.s3.ap-south-1.amazonaws.com/assets/cert9.png",
      title: "Ports, Protocols & the OSI Model",
      organization: "Infosys|Springboard",
      date: "December 1 2024"
    }

  ];

  const scrollLeft = () => {
    const container = document.getElementById("carouselTrack");
    container.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const container = document.getElementById("carouselTrack");
    container.scrollLeft += 300;
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="certificates-container">
 

      <div className="carousel-wrapper">
        <button className="carousel-button left" onClick={scrollLeft}>❮</button>

        <div className="carousel-track" id="carouselTrack">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card">
              <img src={cert.image} alt={cert.title} className="cert-thumbnail" />
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.organization}</p>
                <p>{cert.date}</p>
                <button className="view-button" onClick={() => openModal(cert.image)}>View</button>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button right" onClick={scrollRight}>❯</button>
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate" />
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

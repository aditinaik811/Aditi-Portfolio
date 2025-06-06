import React, { useState } from "react";
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
import cert6 from '../assets/cert6.png';
import cert7 from '../assets/cert7.png';
import cert8 from '../assets/cert8.png';
import cert9 from '../assets/cert9.png';

export default function Certificates() {
  const [modalImage, setModalImage] = useState(null);

  const certificates = [
    {
      image: cert1,
      title: "Introduction to Blockchain and Ethereum",
      organization: "Infosys|Springboard",
      date: "November 23 2024"
    },
    {
      image: cert2,
      title: "Hyperledger for Blockchain Applications",
      organization: "Infosys|Springboard",
      date: "November 24 2024"
    },
    {
      image: cert3,
      title: "Solidity Smart Contract Programming for Ethereum Blockchain",
      organization: "Infosys|Springboard",
      date: "November 26 2024"
    },
    {
      image: cert4,
      title: "Advanced Data Structures & Algorithms in Java : Sorting & Searching Algorithms",
      organization: "Infosys|Springboard",
      date: "May 19 2024"
    },
    {
      image: cert5,
      title: "First Step Korean",
      organization: "Coursera",
      date: "Nov 2 2023"
    },
    {
      image: cert6,
      title: "Bash Scripting and Shell Programming (Linux Command Line)",
      organization: "Infosys|Springboard",
      date: "February 28 2024"
    },
    {
      image: cert7,
      title: "Getting Started with Go Programming Language",
      organization: "Infosys|Springboard",
      date: "Mar 30 2025"
    },
    {
      image: cert8,
      title: "Stratergic Self Marketing and Personal Branding",
      organization: "Coursera",
      date: "April 27 2024"
    },
    {
      image: cert9,
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
      <h2 className="certificates-title">Certificates</h2>

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

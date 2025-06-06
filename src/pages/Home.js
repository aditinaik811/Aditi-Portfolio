import React from "react";
import Aditi from '../assets/Aditi.jpg'
 // Add your photo here

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-name">Aditi Ravindra Naik</h1>
      <img src={Aditi}  alt="Aditi" className="home-photo" />
      <p className="home-tagline">“Bringing Ideas to Life Through Code.”</p>
    </div>
  );
}

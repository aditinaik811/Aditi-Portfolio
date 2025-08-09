import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer
import './Home.css';

// Example: Home.js
export default function Home() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}


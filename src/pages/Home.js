import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer
import './Home.css';

export default function Home() {
  return (
    <div className="layout">
      
        <Navbar />
  
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}


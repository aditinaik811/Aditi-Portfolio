import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Tagline from "./pages/Tagline";
import Education from "./pages/Education";



export default function App() {
  const router = createBrowserRouter([
   
    {path:'',element:<Home/>,children:[
      {path:'home',element:<Tagline/>},
      {path:'',element:<Tagline/>},
      {path:'about',element:<About/>},
      {path:'education',element:<Education/>},
      {path:'skills',element:<Skills/>},
      {path:'projects',element:<Projects/>},
      {path:'achievements',element:<Achievements/>},
      {path:'resume',element:<Resume/>},
      {path:'contact',element:<Contact/>}
    ]},

  ])
  return (
    <div>
          
          <RouterProvider router={router}></RouterProvider>
        
       

    </div>
 
  );
  
}

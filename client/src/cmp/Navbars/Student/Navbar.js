import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/student">Major</a>
        </li>
        <li>
          <a href="/studentminor"> Minor</a>
        </li>

      <li>
          <a href="/analysis"> Analysis</a>
        </li>
        <li>
          
          <a href="/about">About</a>
        </li>
        
       
        <li>
          <a href="/Aprojectsupervisior">Project Supervisior</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

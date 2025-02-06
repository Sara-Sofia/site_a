import React from 'react'
import logo from "../assets/me.jpeg"; // Import the image
import "./Header.css"

export default function Header() {
  return (
    <div id="header">
        <img src={logo} alt="Logo" className="logo" />
            <h1>My Profile</h1>
        
        
    </div>
  )
}
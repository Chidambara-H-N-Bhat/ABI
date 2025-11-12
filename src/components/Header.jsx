import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import "./Head.css";

function Head() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/b_6.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/b_13.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/b_11.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/b_10.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/b_1.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/b_5.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/b_17.jpg",
  ];

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      {/* Top header: logos + nav */}
      <div className="h">
        <div className="logo-container">
          <img src="https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/logo1.gif" alt="Logo" className="logo-main" />
          <img src="https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/logo2.gif" alt="Logo Secondary" className="logo-sub" />
        </div>

        {/* Desktop + Mobile Nav */}
        <nav className={`nav-links ${menuOpen ? "mobile-active" : ""}`}>
          <NavLink to="/" className="nav-item"><FaHome /> Home</NavLink>
          <NavLink to="/Contact" className="nav-item"><MdContactPhone /> Contact</NavLink>
          <a
            href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          ><FaEnvelope /> Webmail</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Bottom nav */}
      <div className="h4">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/management">Management</NavLink>
        <NavLink to="/whyus">Why Us</NavLink>
        <NavLink to="/specialization">Specialization</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/services">Services</NavLink>
      </div>

      {/* Slideshow */}
      <div>
        <img
          src={images[index]}
          alt="Slideshow"
          className="slideshow"
        />
      </div>
    </header>
  );
}

export default Head;

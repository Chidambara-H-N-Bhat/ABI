import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import "./Head.css"
import { FaHome, FaEnvelope } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";


function    Head() {
const [index, setIndex] = useState(0);


const image=[
  "http://kumarelectricals.co.in/image/banner/b_11.jpg",
  "http://kumarelectricals.co.in/image/banner/b_13.jpg",
  "http://kumarelectricals.co.in/image/banner/b_6.jpg",
  "http://kumarelectricals.co.in/image/banner/b_10.jpg",
  "http://kumarelectricals.co.in/image/banner/b_1.jpg",
  "http://kumarelectricals.co.in/image/banner/b_5.jpg",
  "http://kumarelectricals.co.in/image/banner/b_9.jpg",
  "http://kumarelectricals.co.in/image/banner/b_16.gif",
  "http://kumarelectricals.co.in/image/banner/b_17.jpg",


] 


useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % image.length); 
    }, 3000); 
    return () => clearInterval(interval);
  }, [image.length]);




  return (
    <header>
      <div className="h">
        <div className="h11">
          <img src="http://kumarelectricals.co.in/image/logo_new.gif" alt="logo" className="logo" />
          <img src="http://kumarelectricals.co.in/image/logo.gif" alt="logo" className="logo" />
        </div>

        <nav className="h12">
          <NavLink to="/" className="flex items-center gap-2 hover:text-blue-600"><FaHome/>Home</NavLink>
          <NavLink to="/Contact" className="flex items-center gap-2 hover:text-blue-600"><MdContactPhone />Contact</NavLink>
          <a
          href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&dsh=S-2129400193%3A1762913528468239&hd=kumarelectricals.co.in&osid=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600"
          ><FaEnvelope />
          Web mail</a>
        </nav>
      </div>

      <div className="h4">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/management">Management</NavLink>
        <NavLink to="/whyus">Why Us</NavLink>
        <NavLink to="/specialization">Specialization</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/services">Services</NavLink>
      </div>

      <div>
        <img
        src={image[index]}
        alt="slideshow"
        className="h3"
      />
      </div>
    </header>
  )
}

export default Head




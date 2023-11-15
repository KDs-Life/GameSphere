import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="spacer"></div>
      <div className="nav-links-wrapper">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Log-in</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/chat" className="nav-link">Chat</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;

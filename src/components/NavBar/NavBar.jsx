// NavBar.js
import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="spacer"></div>
      <div className="nav-links-wrapper">
        <a href="#" className="nav-link">Log-in</a>
        <a href="#" className="nav-link">Blog</a>
        <a href="#" className="nav-link">Chat</a>
        <a href="#" className="nav-link">Kontakt</a>
      </div>
    </div>
  );
}

export default NavBar;

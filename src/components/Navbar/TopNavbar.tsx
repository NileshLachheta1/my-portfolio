import { useState } from 'react';
import './TopNavbar.css';

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="top-navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#Resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default TopNavbar
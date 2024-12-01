import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Priya <span>Hotel</span></Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/dining">Dining</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
  };

  return (
    <header className="header">
      {/* Hotel Name at the Top */}
      <div className="header-logo-container">
        <Link to="/" className="header-logo">
          Priya Hotel
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/dining">Dining</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>

      {/* Hamburger Menu Toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;

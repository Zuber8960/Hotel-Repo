import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'; // Link to your CSS file or use styled-components

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Priya Hotel</Link>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/dining">Dining</Link>
        <Link to="/amenities">Amenities</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;

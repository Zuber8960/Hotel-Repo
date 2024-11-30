import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero" style={heroStyles}>
      <div className="hero-content" style={contentStyles}>
        <h1 style={headingStyles}>Welcome to Priya Hotel</h1>
        <p style={paragraphStyles}>Experience luxury and tradition at its finest.</p>
        <button style={buttonStyles}>Book Now</button>
      </div>
    </div>
  );
};

// Styling for the Hero section
const heroStyles = {
  backgroundImage: 'url("https://via.placeholder.com/1500x800?text=")', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', // Full viewport height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff', // White text
  textAlign: 'center',
  position: 'relative',
};

// Styling for content inside the Hero section
const contentStyles = {
  zIndex: 1, // Ensure text and button are above the background image
};

// Styling for heading (h1)
const headingStyles = {
  fontSize: '3rem', // Larger font size for the heading
  fontWeight: 'bold',
  marginBottom: '20px', // Space between heading and paragraph
  letterSpacing: '2px',
};

// Styling for paragraph (p)
const paragraphStyles = {
  fontSize: '1.2rem',
  marginBottom: '30px', // Space between paragraph and button
  lineHeight: '1.6',
  maxWidth: '600px', // Limit the width of the text for readability
  margin: '0 auto', // Center the text block
};

// Styling for the button
const buttonStyles = {
  backgroundColor: '#FF7F50', // Coral color (or any color you prefer)
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease', // Smooth hover transition
};

export default HeroSection;

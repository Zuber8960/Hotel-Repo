import React from 'react';

const imageStyles = {
  width: '100%',
  height: '200px', // Fixed height to maintain consistent card height
  objectFit: 'cover', // Ensures images maintain their aspect ratio
  borderRadius: '8px', // Rounded corners for the image
  marginBottom: '10px', // Space between image and content
};

const RoomCard = ({ name, price, image, description, amenities }) => {
  return (
    <div style={cardStyles}>
      <img src={image} alt={name} style={imageStyles} />
      <h3 style={cardTitleStyles}>{name}</h3>
      <p style={cardDescriptionStyles}>{description}</p>
      <p style={amenitiesStyles}>Amenities: {amenities.join(', ')}</p>
      <p style={priceStyles}>Starting at ₹{price}</p>
      <button style={buttonStyles}>Book Now</button>
    </div>
  );
};

// Styling for the card
const cardStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  flex: '1 1 300px', // Ensure flexibility for resizing
  margin: '10px',
  transition: 'transform 0.3s ease', // Add smooth hover effect
};

const cardTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

const cardDescriptionStyles = {
  fontSize: '1rem',
  color: '#6c757d',
  marginBottom: '15px',
  lineHeight: '1.5',
};

const amenitiesStyles = {
  fontSize: '0.9rem',
  color: '#007bff',
  marginBottom: '10px',
};

const priceStyles = {
  fontSize: '1.1rem',
  color: '#FF7F50', // Coral color for price
  marginBottom: '15px',
  fontWeight: 'bold',
};

const buttonStyles = {
  backgroundColor: '#FF7F50', // Coral color (or any color you prefer)
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease', // Smooth hover transition
  width: '100%', // Button takes full width of the card
};

export default RoomCard;

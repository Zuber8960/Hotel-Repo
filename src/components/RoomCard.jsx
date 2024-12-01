 
import React from 'react';


const imageStyles = {
    width: '300px',
    height: '200px',
    objectFit: 'cover', // Ensures images maintain their aspect ratio
  };
  


const RoomCard = ({ name, price, image, description, amenities }) => {
  return (
    <div style={imageStyles}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>amenities: {amenities}</p>
      <p>Starting at ₹{price}</p>
      <button style={buttonStyles}>Book Now</button>
    </div>
  );
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
  };

export default RoomCard;

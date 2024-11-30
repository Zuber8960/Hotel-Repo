 
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
      <button>Book Now</button>
    </div>
  );
};

export default RoomCard;

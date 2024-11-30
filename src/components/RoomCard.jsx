 
import React from 'react';

const RoomCard = ({ name, price, image, description }) => {
  return (
    <div className="room-card">
      <img src={image} alt={name} />
      <h3>Name</h3>
      <p>{description}</p>
      <p>Starting at ₹{price}</p>
      <button>Book Now</button>
    </div>
  );
};

export default RoomCard;

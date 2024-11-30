import React, { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
import axios from 'axios';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const room = [
      {
        id: 1,
        name: "Deluxe Room",
        price: 5000,
        description: "A luxurious room with all modern amenities.",
        image: "https://via.placeholder.com/300x200?text=Deluxe+Room",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat Screen TV", "Mini Bar"],
        capacity: 2,
        availability: true,
      },
      {
        id: 2,
        name: "Standard Room",
        price: 3000,
        description: "A comfortable room for budget travelers.",
        image: "https://via.placeholder.com/300x200?text=Standard+Room",
        amenities: ["Free Wi-Fi", "Air Conditioning"],
        capacity: 2,
        availability: true,
      },
      {
        id: 3,
        name: "Family Suite",
        price: 8000,
        description: "A spacious suite perfect for families.",
        image: "https://via.placeholder.com/300x200?text=Family+Suite",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Kitchenette", "Dining Area"],
        capacity: 4,
        availability: false,
      },
    ];

    setRooms(room); // Set the state inside useEffect
  }, []); // Empty dependency array ensures this runs only once


  return (
    <div>
      <h1>Our Rooms</h1>
      <div className="room-list">
        {rooms.map(room => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;

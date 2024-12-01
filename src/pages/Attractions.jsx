  
import React from 'react';
import amberFortImage from '../assets/images/images-30-largejpg.jpg';
import CityPalace from '../assets/images/city-palace-jaipur.jpg';
import Hawa from '../assets/images/Hawa.jpg';
import Jantar from '../assets/images/Jantar.jpg';


const Attractions = () => {
  const attractions = [
    {
      name: "Amber Fort",
      description: "A majestic fort known for its artistic style and historical significance.",
      image: `${amberFortImage}`,
      distance: "10 km from the hotel",
    },
    {
      name: "City Palace",
      description: "A splendid blend of traditional Rajasthani and Mughal architecture.",
      image: `${CityPalace}`,
      distance: "5 km from the hotel",
    },
    {
      name: "Hawa Mahal",
      description: "The iconic Palace of Winds, a must-visit for its unique facade.",
      image: `${Hawa}`,
      distance: "4 km from the hotel",
    },
    {
      name: "Jantar Mantar",
      description: "A UNESCO World Heritage site with fascinating astronomical instruments.",
      image: Jantar,
      distance: "5.5 km from the hotel",
    },
  ];

  return (
    <div className="attractions-section" style={attractionsSectionStyles}>
      <h1 style={headingStyles}>Nearby Attractions</h1>
      <p style={subheadingStyles}>
        Explore these incredible places near Priya Hotel to make your stay unforgettable.
      </p>
      <div style={attractionsContainerStyles}>
        {attractions.map((attraction, index) => (
          <div key={index} style={attractionCardStyles}>
            <img
              src={attraction.image}
              alt={attraction.name}
              style={attractionImageStyles}
            />
            <h3 style={attractionNameStyles}>{attraction.name}</h3>
            <p style={attractionDescriptionStyles}>{attraction.description}</p>
            <p style={attractionDistanceStyles}>{attraction.distance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const attractionsSectionStyles = {
  backgroundColor: '#f8f9fa', // Light gray background
  padding: '50px 20px',
  textAlign: 'center',
  
  backgroundImage: 'url("https://via.placeholder.com/1500x800?text=")', // Replace with your image URL
//   const back = {
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh', // Full viewport height
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: '#fff', // White text
//     textAlign: 'center',
//     position: 'relative',
//   }
};

const headingStyles = {
  fontSize: '2.5rem',
  marginBottom: '10px',
  color: '#343a40', // Dark text color
};

const subheadingStyles = {
  fontSize: '1.2rem',
  marginBottom: '40px',
  color: '#6c757d', // Muted text color
};

const attractionsContainerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
};

const attractionCardStyles = {
  backgroundColor: '#ffffff', // White background
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for depth
  textAlign: 'left',
  flex: '1',
  minWidth: '250px',
  maxWidth: '300px',
};

const attractionImageStyles = {
    width: '100%', // Ensures the image takes the full width of its container
    height: '200px', // Sets a consistent height for all images
    objectFit: 'cover', // Ensures the image fills the container while maintaining aspect ratio
    borderRadius: '8px',
    marginBottom: '10px',
  };
const attractionNameStyles = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#343a40',
};

const attractionDescriptionStyles = {
  fontSize: '1rem',
  color: '#6c757d',
  marginBottom: '10px',
  lineHeight: '1.5',
};

const attractionDistanceStyles = {
  fontSize: '0.9rem',
  color: '#007bff', // Blue text color
};

export default Attractions;

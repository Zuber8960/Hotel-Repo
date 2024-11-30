import React from 'react';

const Gallery = () => {
  // Array to store image URLs
  const images = [
    "https://media.istockphoto.com/id/1938106570/photo/digitally-generated-domestic-bedroom-interior.jpg?s=1024x1024&w=is&k=20&c=b88bciq6K8Q3d4jK7yU-QyHxySIrhCe42l31P0ajAzQ=",
    "https://media.istockphoto.com/id/1327143420/photo/3d-render-of-working-office-room.jpg?s=612x612&w=0&k=20&c=ZGFuLL6iW2sc9GtjiM5hYMHaNA11DD_5-DE_AqGgkP8=",
    "https://media.istockphoto.com/id/1334791685/photo/3d-image-of-a-bedroom-interior-with-furniture.jpg?s=612x612&w=0&k=20&c=iokrfofuEpLyVMPOfrNF9-AHQAfgI1_SoJHQF4QeHzU=",
  ];

  return (
    <div>
      <h2>Gallery</h2>
      <div style={galleryStyles}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} style={imageStyles} />
        ))}
      </div>
    </div>
  );
};

// Simple styling for gallery and images
const galleryStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '10px',
};

const imageStyles = {
  width: '300px',
  height: '200px',
  objectFit: 'cover', // Ensures images maintain their aspect ratio
};

export default Gallery;

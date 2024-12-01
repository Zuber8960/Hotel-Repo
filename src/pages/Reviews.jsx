import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "Anjali Sharma",
      date: "Nov 25, 2024",
      rating: 5,
      comment: "Amazing experience! The staff was super friendly, and the rooms were spotless.",
    },
    {
      name: "Rajesh Gupta",
      date: "Nov 20, 2024",
      rating: 4,
      comment: "Great ambiance and service. The food was delicious, but slightly expensive.",
    },
    {
      name: "Priya Patel",
      date: "Nov 15, 2024",
      rating: 5,
      comment: "Absolutely loved the stay! The traditional decor and modern amenities were perfect.",
    },
    {
      name: "Karan Mehta",
      date: "Nov 10, 2024",
      rating: 3,
      comment: "Decent place, but the Wi-Fi connection was slow during my stay.",
    },
  ];

  return (
    <div className="reviews-section" style={reviewsSectionStyles}>
      <h1 style={headingStyles}>Guest Reviews</h1>
      <p style={subheadingStyles}>
        Hear what our guests have to say about their experience at Priya Hotel.
      </p>
      <div style={reviewsContainerStyles}>
        {reviews.map((review, index) => (
          <div key={index} style={reviewCardStyles}>
            <h3 style={reviewNameStyles}>{review.name}</h3>
            <p style={reviewDateStyles}>{review.date}</p>
            <div style={ratingStyles}>
              {"★".repeat(review.rating)}{" "}
              <span style={unratedStyles}>
                {"★".repeat(5 - review.rating)}
              </span>
            </div>
            <p style={reviewCommentStyles}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const reviewsSectionStyles = {
  backgroundColor: '#f8f9fa', // Light gray background
  padding: '50px 20px',
  textAlign: 'center',
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

const reviewsContainerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
};

const reviewCardStyles = {
  backgroundColor: '#ffffff', // White background
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for depth
  textAlign: 'left',
  flex: '1',
  minWidth: '250px',
  maxWidth: '300px',
};

const reviewNameStyles = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#343a40',
};

const reviewDateStyles = {
  fontSize: '0.9rem',
  color: '#6c757d',
  marginBottom: '10px',
};

const ratingStyles = {
  fontSize: '1.1rem',
  color: '#FFD700', // Gold color for stars
  marginBottom: '10px',
};

const unratedStyles = {
  color: '#d3d3d3', // Light gray for unrated stars
};

const reviewCommentStyles = {
  fontSize: '1rem',
  color: '#343a40',
  lineHeight: '1.5',
};

export default Reviews;

import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us" style={contactUsStyles}>
      <div className="contact-us-content" style={contentStyles}>
        <h1 style={headingStyles}>Contact Us</h1>
        <p style={paragraphStyles}>
          Have any questions or need assistance? We’re here to help. Reach out to us through any of the options below.
        </p>
        <div style={infoContainerStyles}>
          <div style={infoBoxStyles}>
            <h3 style={infoHeadingStyles}>Address</h3>
            <p style={infoTextStyles}>123 Priya Street, Jaipur, India</p>
          </div>
          <div style={infoBoxStyles}>
            <h3 style={infoHeadingStyles}>Phone</h3>
            <p style={infoTextStyles}>+91 98765 43210</p>
          </div>
          <div style={infoBoxStyles}>
            <h3 style={infoHeadingStyles}>Email</h3>
            <p style={infoTextStyles}>contact@gmail.com</p>
          </div>
        </div>
        <button style={buttonStyles}>Send a Message</button>
      </div>
    </div>
  );
};

// Styles
const contactUsStyles = {
  backgroundColor: '#f8f9fa', // Light gray background
  padding: '50px 20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const contentStyles = {
  maxWidth: '800px',
  width: '100%',
};

const headingStyles = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#343a40', // Dark text color
};

const paragraphStyles = {
  fontSize: '1.2rem',
  marginBottom: '30px',
  lineHeight: '1.6',
  color: '#6c757d', // Muted text color
};

const infoContainerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
  marginBottom: '30px',
};

const infoBoxStyles = {
  backgroundColor: '#ffffff', // White background
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for depth
  textAlign: 'left',
  flex: '1',
  minWidth: '200px',
};

const infoHeadingStyles = {
  fontSize: '1.2rem',
  marginBottom: '10px',
  fontWeight: 'bold',
  color: '#343a40',
};

const infoTextStyles = {
  fontSize: '1rem',
  color: '#6c757d',
};

const buttonStyles = {
  backgroundColor: '#FF7F50', // Coral color
  color: '#fff',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease',
};

// Add hover effect for button
buttonStyles[':hover'] = {
  backgroundColor: '#e06a3c', // Slightly darker coral on hover
};

export default ContactUs;

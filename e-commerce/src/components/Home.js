// Name: Apexa Patel

import React from 'react';
import phoneImage from '../images/home.png'; // Import image for the home section
import '../css/Style.css'; // Import styles for the component

function Home() {
  return (
    <div className="home-section">
      {/* heading and description */}
      <h1>Welcome to MobileMania</h1>
      <p>Your ultimate destination for next-gen smartphones!</p>

      {/* Image for the featured product */}
      <img
        src={phoneImage}
        alt="Featured Mobile"
        className="img-fluid"
        style={{ width: '80%', maxWidth: '400px', marginTop: '1rem' }}
      />
    </div>
  );
}

export default Home;

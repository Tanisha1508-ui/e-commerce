// Name: Siddharth Ahir

import React from 'react';
import aboutImage from '../images/about.png'; // Import image for the about section
import '../css/Style.css'; // Import styles for the component

function About() {
  return (
    <div className="about-section">
      {/* Container for the about section */}
      <div className="about-container">
        
        {/* Image related to the about section */}
        <img src={aboutImage} alt="About" />

        {/* Text content */}
        <div className="about-text">
          <h3>About Us</h3>
          <p>
            We are a team of passionate developers who love building responsive and innovative websites.
            MobileMania showcases our creativity in UI/UX and frontend development.
          </p>
          <p>
            We aim to deliver high-performance solutions with clean design and optimized experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

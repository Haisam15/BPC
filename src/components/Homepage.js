import React from 'react';
import './Homepage.css'; 

function ComingSoonPage() {
  return (
    <div className="coming-soon-container">
      <header className="header">
        <img src="./Images/Investor.jpg" alt="Company Logo" className="logo" />
      </header>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="coming-soon-content">
        <h1 className="coming-soon-text">Coming Soon</h1>
      </div>
    </div>
  );
}

export default ComingSoonPage;

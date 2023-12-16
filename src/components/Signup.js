
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';// Import your slideshow styles
import './welcome.css';

const Signup = () => {
    return (
      <div>
        <section className='head rightAlign'>
          <div className="container flexSB">
           
            <div className="logo animated">
              <div className="logo-container">
                <img src="logo-no-background.png"
                  style={{filter: 'invert(100)', margin: 0, width: 250, marginTop: 10}}
                alt="Logo" className="logo-image" />
                <div className="logo-text">
                  {/* <h1>Business Partnership Collaboration Portal</h1>
                  <span>Connect. Collaborate. Prosper!</span> */}
                </div>
              </div>
            </div>
            <div className="navigation flexSB">
              <ul>
                <li><Link to="/signup"><i className="fas fa-user-plus"></i> SignUp</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default Signup;
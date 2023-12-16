import React from 'react';
import Slideshow from './Slideshow';
import Signup from './Signup';
import './welcome.css';

const MainComponent = () => {
  return (
    <>
    <div className='mainContainer'>
      <Slideshow />
      <Signup />
    </div>
      
    </>
  );
};

export default MainComponent;

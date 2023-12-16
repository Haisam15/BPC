import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import './welcome.css';

const Slideshow = () => {
  const videos = ['01.mp4', '02.mp4', '03.mp4', '04.mp4', '05.mp4'];
  const isVideo = true; // Set to true if using videos, false if using images

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change video every 5 seconds (adjust as needed)
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, []);

  return (
    <div className="slideshow-container">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Adjust duration as needed
        >
          <div className="slide-content">
            <div className="video-frame">
              <video autoPlay muted loop playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div
                className="welcome-frame"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                {/* Your additional content goes here */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Slideshow;

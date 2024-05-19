import React, { useEffect } from 'react';
import axios from 'axios';
import '../css/Home.css';

const Home = () => {
  

  return (
    <div className='hero'>
      <div className="hero-content">
        <h1 className='hero-text'>Instruments Reservation</h1> 
        <p className='hero-description'>
          This website is exclusively designed for students of the music school. It facilitates the reservation and rental of musical instruments, providing an efficient and user-friendly platform for managing instrument bookings.
        </p>
      </div>
      <div className='hero-image'></div>
    </div>
  );
};

export default Home;

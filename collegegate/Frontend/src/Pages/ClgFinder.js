import React, { useState } from 'react';
import './ChatWindow.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from './logo.png';
import sprite from '../../src/Assets/robot-character-constructor-set-illustration/Em.png';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

function ClgFinder() {

  return (
    <div className='Page'>
      <div className='LeftContainer'>
        {/* Content for the left side of the page */}
        <div className='LeftContent'>
          <img class= "logo" src={logo} />
        </div>
        <section>
          <img class= "sprite" src={sprite} />
        </section>
        <div className='navi'>
          <Link to="/JobInterview>">
          <button className='navi-btn'><ArrowBackIosIcon /></button>
          </Link>
          <span className="navi-icon"><p>V</p></span>
          <Link to="/CollegeInterview">
          <button className='navi-btn'><ArrowForwardIosIcon /></button>
          </Link>
        </div>
      </div>
      <div className='RightContainer'>
        <div className="container">
          <input type='text' className='usrInput' placeholder="Let's find you a college"></input>
          <SendIcon/>
        </div>
      </div>
      <div>
        <div className='Footer'>
          <div className="logo-container">
            <img className="logo" src={logo} alt="CollegeGate Logo" />
          </div>
          <p>&copy; 2023 CollegeGate.</p>
          <a href="https://www.freepik.com/free-vector/robot-character-constructor-set-illustration_40125205.htm">Image by Freepik</a>
        </div>
      </div>
    </div>
  );
}

export default ClgFinder

import React, { useState } from 'react';
import './ChatWindow.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from './logo.png';
import sprite from '../../src/Assets/robot-character-constructor-set-illustration/Em.png';
function ClgFinder() {

  const [usrInput, usrHasInput ] = useState();

  const onChange = (event) =>{
    const newUsrInput = event.target.value
    usrHasInput(newUsrInput)
    console.log(usrInput)
  }

  return (
    <div className='Page'>
      <div className='LeftContainer'>
        {/* Content for the left side of the page */}
        <div className='LeftContent'>
          <h2>Welcome to Collegegate</h2>
          <img src="CollegeGate.png" alt="CollegeGate Logo" />
        </div>
        <section>
          <h3>This is a section</h3>
          <img src="CollegeGate.png" alt="CollegeGate Logo" />
        </section>
        <div className='navi'>
          <button className='navi-btn'><ArrowBackIosIcon /></button>
          <span className="navi-icon"><p>V</p></span>
          <button className='navi-btn'><ArrowForwardIosIcon /></button>
        </div>
      </div>
      <div className='RightContainer'>
        <div className="container">
          <input type='text' className='usrInput' placeholder="Let's find you a college" onChange={onChange}></input>
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

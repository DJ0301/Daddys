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
        <img class="logo" src={logo} />
        </div>
      <section>
        <img class="sprite" src={sprite} />
      </section>
      <div className='navi'>
          <button className='navi-btn'><ArrowBackIosIcon /></button>
            <span class="navi-icon"><p>M</p></span>
          <button className='navi-btn'><ArrowForwardIosIcon /></button>
        </div>

      </div>
      <div className='RightContainer'>
        <div className="container">
          <input type='text' className='usrInput' placeholder="Let's find you a college" onChange={onChange}></input>
        </div>
      </div>
    </div>
  );
}

export default ClgFinder

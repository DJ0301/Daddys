import React, { useState } from 'react';
import './ChatWindow.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
        </div>
      <section>
        <h3>this is</h3>
        <img src="Image.jpeg"></img>
      </section>
      <div class="navi">
        <span class="navi-icon"><ArrowBackIosIcon /></span>
        <span class="navi-icon"><p>V</p></span>
        <span class="navi-icon"><ArrowForwardIosIcon /></span>
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

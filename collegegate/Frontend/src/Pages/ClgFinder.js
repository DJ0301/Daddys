import React, { useState } from 'react';
import './ChatWindow.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ClgFinder() {
  const [currentItemIndex, ButtonPressed] = useState(0)

  function ButtonPressed(){

  }


  const items = ['F', 'I', 'L', 'M'];
  const currentElement = document.getElementById('current-item');
      currentElement.innerText = items[currentItemIndex];

      const leftButton = document.getElementById('left-button');
      leftButton.addEventListener('click', () => {
        currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
        currentElement.innerText = items[currentItemIndex];
      });

      const rightButton = document.getElementById('right-button');
      rightButton.addEventListener('click', () => {
        currentItemIndex = (currentItemIndex + 1) % items.length;
        currentElement.innerText = items[currentItemIndex];
   });


  return (   
    <div className='Page'>
      <div className='LeftContainer'>
        {/* Content for the left side of the page */}
        <div className='LeftContent'>
          <h2>Welcome to Collegegate</h2>
        </div>
      <section>
        <h3>This is</h3>
        <img src="Image.jpeg"></img>
      </section>

      <div className='navi'>
          <button className='navi-btn' onClick={}><ArrowBackIosIcon /></button>
          
            <span class="navi-icon"><p>V</p></span>

          <button className='navi-btn'><ArrowForwardIosIcon /></button>
        </div>


      </div>
      <div className='RightContainer'>
        <div className="container">
          <input type='text' className='usrInput' placeholder="Let's find you a college"></input>
        </div>
      </div>
    </div>
  );
}

export default ClgFinder

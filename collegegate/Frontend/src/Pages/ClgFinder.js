import React, { useState } from 'react';
import './ChatWindow.css';

function ClgFinder() {

  const [usrInput, usrHasInput ] =useState();

  const onChange = (event) =>{
    const newUsrInput = event.target.value
    usrHasInput(newUsrInput)
    console.log(usrInput)
  }

  return (
    <div className='Page'>
      <div class="container">
        <input type='text' className='usrInput' placeholder="Let's find you a college" onChange={onChange}></input>
    </div>
    </div>
  );
}

export default ClgFinder
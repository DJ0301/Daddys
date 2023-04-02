import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div>
    <div className='Footer'>
      <GitHubIcon />
      <a href="https://www.freepik.com/free-vector/robot-character-constructor-set-illustration_40125205.htm">Image by Freepik</a>
    </div>
    <div>
    <p>&copy; 2023 CollegeGate.</p>
    </div>
  </div>
  
  )
}

export default Footer

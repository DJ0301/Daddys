import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div>
      <div className='Footer'>
        <GitHubIcon />
        <p>&copy; 2023 CollegeGate.</p>
      </div>
    </div>
  )
}

export default Footer

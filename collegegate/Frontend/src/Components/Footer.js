import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div>
      <div className='Footer'>
      <div className='Navigation spaceAround'>
          <Link to="/ClgFinder"> College Finder</Link>
          <Link to="/ClgInterview"> College Interview</Link>
          <Link to="JobInterview"> Job Interview</Link>
          <Link to="/ResumeBldr"> Resume Builder</Link>
      </div >
        <GitHubIcon />
        <p>&copy; 2023 CollegeGate.</p>
      </div>
    </div>
  )
}

export default Footer

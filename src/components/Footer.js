import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Home from "../pages/Home";
import ClgFinder from "../pages/ClgFinder";
import ClgInterview from "../pages/ClgInterview";
import JobInterview from "../pages/JobInterview";
import ResumeBldr from "../pages/ResumeBldr";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className='Navigation'>
        <Link to={ClgFinder}> College Finder</Link>
        <Link to={ClgInterview}> College Interview</Link>
        <Link to={JobInterview}> Job Interview</Link>
        <Link to={ResumeBldr}> Resume Builder</Link>
      </div>
      <div className='Footer'>
        <GitHubIcon />
        <p>&copy;; 2023 CollegeGate.</p>
      </div>
    </div>
  )
}

export default Footer

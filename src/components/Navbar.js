import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <h1>College Gate</h1>
        </div>
        <div className='rightSide'>
            <Link to = "/">Home</Link>
            <Link to = "/CollegeFinder">ClgFinder</Link>
            <Link to = "/CollegeInterviewHelp">ClgInteriw</Link>
            <Link to = "/JobInterview">JobInterview</Link>
            <Link to = "/ResumeBuilder">ResumeBuilder</Link>
        </div>
    </div>
  );
}

export default Navbar

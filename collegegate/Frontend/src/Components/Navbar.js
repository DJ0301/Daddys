import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            CollegeGate
        </div>
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/ClgFndr"> ClgFndr </Link>
            <Link to="/JobFndr"> JobFndr </Link>
            <Link to="/ClgIntrvw"> ClgIntrvw </Link>
            <Link to="/ResumeBuildr"> ResumeBuildr </Link>
        </div>
    </div>
  );
}

export default Navbar

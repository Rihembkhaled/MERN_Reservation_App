import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ role }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to="/" className='navbar-brand'>Instruments Reservation</Link>
      </div>
      <div className='navbar-right'>
        {role === "admin" && (
          <>
            <Link to="/insts" className='navbar-link'>Instruments</Link>
            <Link to="/addinst" className='navbar-link'>Add Inst</Link>
            <Link to="/addstudent" className='navbar-link'>Add Student</Link>
            <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
            <Link to="/logout" className='navbar-link'>Logout</Link>
          </>
        )}
        {role === "student" && (
          <>
            <Link to="/insts" className='navbar-link'>Instruments</Link>
            
            <Link to="/logout" className='navbar-link'>Logout</Link>
          </>
        )}
        {role === "" && (
          <Link to="/login" className='navbar-link'>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

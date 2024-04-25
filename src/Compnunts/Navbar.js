// Navbar.js
import React from 'react';
import { FaSearch, FaUser, FaSignOutAlt, FaHome, FaChartPie } from 'react-icons/fa';
import '../Styles/Navbar.css'; // Adjusted import path
function Navbar({ onLogout }) {
  const handleLogout = () => {
    // Call the onLogout callback function provided by the parent component
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <nav className="navbar">
         <FaUser className="navbar-icon" />
      <div className="navbar-logo">Expenses Managment System</div>
      <div className="navbar-links">
        <ul>
          <li><FaHome className="navbar-icon" /> Home</li>
          <li><FaChartPie className="navbar-icon" /> Reports</li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button><FaSearch /></button>
      </div>
      <div className="navbar-icons">
      <div className="navbar-logo">Logout</div>
        <FaSignOutAlt className="navbar-icon" onClick={handleLogout} />
      </div>
    </nav>
  );
}

export default Navbar;

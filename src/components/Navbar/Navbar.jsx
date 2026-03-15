import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <h2>Comfort<span>Tech</span></h2>
        </div>

        {/* Links Section - Hidden/Shown on Mobile */}
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right Side Icons & Toggle */}
        <div className="nav-icons">
          <button className="icon-btn"><FontAwesomeIcon icon={faSearch} /></button>
          <button className="icon-btn"><FontAwesomeIcon icon={faShoppingBag} /></button>
          
          {/* Hamburger Menu - Only visible on small screens */}
          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
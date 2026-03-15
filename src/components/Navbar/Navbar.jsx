// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faHeart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <Link to="/" className="nav-logo">
          <span className="logo-text">COMFORT</span>
          <span className="logo-sub">TECH</span>
        </Link>

        {/* Navigation Links */}
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} 
            onClick={() => setIsMobile(false)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Laptops</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>

        {/* Action Icons */}
        <div className="nav-icons">
          <button className="icon-btn search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <Link to="/wishlist" className="icon-link">
            <FontAwesomeIcon icon={faHeart} />
            <span className="badge">0</span>
          </Link>
          <Link to="/cart" className="icon-link">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="badge">2</span>
          </Link>
          <Link to="/login" className="icon-link user-icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
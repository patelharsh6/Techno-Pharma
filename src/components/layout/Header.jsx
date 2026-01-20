import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logoImg from '../../assets/logos/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          {/* 2. USE THE VARIABLE HERE */}
          <img src={logoImg} alt="Aegro Tech Farma" className="logo-image" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} end>Home</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => isActive ? "active-link" : ""}>Products</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
            <li><NavLink to="/clients" className={({ isActive }) => isActive ? "active-link" : ""}>Clients</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink></li>
          </ul>
        </nav>

        {/* Call to Action (Desktop) */}
        <div className="header-actions">
          <Link to="/contact" className="btn-quote">Contact</Link>
        </div>

        {/* Mobile Menu Toggle (The Animated X) */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <span className="mobile-logo">AEGRO TECH</span>
        </div>
        <ul className="mobile-links">
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/clients" onClick={closeMenu}>Clients</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
          <li><Link to="/contact" className="btn-quote-mobile" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
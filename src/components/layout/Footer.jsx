import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Smartphone } from 'lucide-react';
import './Footer.css'; // Importing the new CSS

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            AEGRO TECH FARMA
          </Link>
          <p className="footer-desc">
            Your trusted partner in precision pharmaceutical and packaging machinery. 
            Engineered for accuracy, built for longevity, and compliant with GMP standards.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/clients">Client List</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="footer-col">
          <h3>Our Machines</h3>
          <ul className="footer-links">
            <li><Link to="/products/washing">Bottle Washing</Link></li>
            <li><Link to="/products/filling">Liquid Filling</Link></li>
            <li><Link to="/products/sealing">Capping & Sealing</Link></li>
            <li><Link to="/products/labeling">Labeling Machines</Link></li>
            <li><Link to="/products/conveyors">Packing Conveyors</Link></li>
          </ul>
        </div>

        {/* Contact Info (Brochure Data) */}
        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <span className="icon"><MapPin className="c-icon" size={24} /></span>
              <span>
                23, Shivbhumi-4, Near Shahitya Hub,<br/>
                Kujad-Gatrad Road, Bakrol,<br/>
                Ahmedabad - 382430
              </span>
            </li>
            <li>
              <span className="icon"><Phone className="c-icon" size={24} /></span>
              <div className="phone-group">
                <a href="tel:+919328058223">+91 9328058223</a>
              </div>
            </li>
            <li>
              <span className="icon"><Mail className="c-icon" size={24} /></span>
              <a href="mailto:technopharmaeng@gmail.com">technopharmaeng@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Aegro Tech Farma. All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clients } from '../data/clients';
import { CheckCircle, Users, Trophy, Handshake } from 'lucide-react';
import './Clients.css';

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to get initials for the logo placeholder
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="clients-page">
      
      {/* --- HERO SECTION --- */}
      <div className="clients-hero">
        <div className="container">
          <span className="hero-badge-light">Trusted Network</span>
          <h1>Our Valued Partners</h1>
          <p>We are proud to power the production lines of leading pharmaceutical and biotech companies across the industry.</p>
        </div>
      </div>

      {/* --- CLIENTS GRID --- */}
      <section className="section client-grid-section">
        <div className="container">
          <div className="client-grid">
            {clients.map((client) => (
              <div key={client.id} className="client-card">
                <div className="logo-placeholder">
                  {getInitials(client.name)}
                </div>
                <h3>{client.name}</h3>
                <p className="client-loc">{client.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY TRUST US --- */}
      <section className="trust-section">
        <div className="container">
          <div className="section-header center">
            <h2>Why Industry Leaders Choose Aegro Tech</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          
          <div className="trust-grid">
            <div className="trust-item">
              <Trophy size={40} className="trust-icon" />
              <h3>Proven Reliability</h3>
              <p>Over 500+ installations with a track record of durability and minimal downtime.</p>
            </div>
            <div className="trust-item">
              <CheckCircle size={40} className="trust-icon" />
              <h3>GMP Compliance</h3>
              <p>All machines meet strict Good Manufacturing Practice standards for pharma auditing.</p>
            </div>
            <div className="trust-item">
              <Handshake size={40} className="trust-icon" />
              <h3>After-Sales Support</h3>
              <p>We view our clients as partners, offering lifetime support and spare parts availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="join-cta">
        <div className="container">
          <h2>Join Our Growing Family</h2>
          <p>Experience the precision and efficiency that top brands rely on.</p>
          <Link to="/contact" className="btn-join">
            Become a Partner
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Clients;
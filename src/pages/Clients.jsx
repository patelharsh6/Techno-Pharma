import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clients } from '../data/clients';
import { Trophy, CheckCircle, Handshake, Star } from 'lucide-react';
import './Clients.css';

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper: Initials for fallback if logo is missing
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
      
      {/* --- HERO SECTION WITH CENTER BADGE --- */}
      <div className="clients-hero-wrapper">
        {/* The Blue Background Strip */}
        <div className="clients-hero-strip"></div>
        
        {/* The Center Badge (Floating on top) */}
        <div className="hero-badge-container">
          <div className="techno-badge">
            {/* Replace this src with your actual badge image if you have it */}
            <img 
              src="/assets/images/client-badge.png" 
              alt="Techno Client List" 
              className="badge-img"
              onError={(e) => e.target.style.display = 'none'} // Hides if file missing
            />
            {/* Fallback Text if image missing */}
            <div className="badge-text-fallback">
              <span className="b-title">TECHNO</span>
              <span className="b-subtitle">Client List</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- CLIENT LOGO GRID --- */}
      <section className="section client-grid-section">
        <div className="container">
          
          <div className="client-grid">
            {clients.map((client) => (
              <div key={client.id} className="client-card">
                {/* 1. THE LOGO IMAGE */}
                <div className="logo-area">
                  {client.logo ? (
                    <img 
                      src={client.logo}
                      alt={`${client.name} Logo`} 
                      className="client-logo-img"
                      onError={(e) => {
                        e.target.style.display = 'none'; // Hide broken link
                        e.target.nextSibling.style.display = 'flex'; // Show initials
                      }}
                    />
                  ) : null}

                  {/* 2. THE FALLBACK INITIALS (Hidden by default) */}
                  <div 
                    className="logo-placeholder" 
                    style={{ display: client.logo ? 'none' : 'flex' }}
                  >
                    {getInitials(client.name)}
                  </div>
                </div>

                <div className="client-info">
                  <h3>{client.name}</h3>
                  <p className="client-loc">{client.location}</p>
                </div>
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
              <div className="icon-circle">
                <Trophy size={32} />
              </div>
              <h3>Proven Reliability</h3>
              <p>Over 500+ installations with a track record of durability.</p>
            </div>
            <div className="trust-item">
               <div className="icon-circle">
                <CheckCircle size={32} />
              </div>
              <h3>GMP Compliance</h3>
              <p>Strict adherence to pharmaceutical auditing standards.</p>
            </div>
            <div className="trust-item">
               <div className="icon-circle">
                <Handshake size={32} />
              </div>
              <h3>Lifetime Support</h3>
              <p>We provide spare parts and service for every machine we build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- JOIN CTA --- */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-content-box">
            <Star className="star-icon" size={48} />
            <h2>Join Our Growing Family</h2>
            <p>Experience the precision and efficiency that top brands rely on.</p>
            <Link to="/contact" className="btn-join">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Clients;
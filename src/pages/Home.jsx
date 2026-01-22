import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, ShieldCheck, Truck } from 'lucide-react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      
      {/* --- HERO SECTION WITH VIDEO --- */}
      <section className="hero-section">
        
        {/* 1. The Video Element */}
        <video className="hero-video" autoPlay loop muted playsInline>
  <source 
    src="/assets/downloads/bgvideo.mp4"
    type="video/mp4" 
  />
</video>


        {/* 2. Dark Overlay (Crucial for text readability) */}
        <div className="hero-overlay"></div>

        {/* 3. The Content */}
        <div className="hero-content container">
          <span className="hero-badge">ISO 9001:2015 Certified Manufacturing</span>
          <h1 className="hero-title">
            Precision Pharmaceutical <br /> 
            <span className="highlight-text">Packaging Machinery</span>
          </h1>
          <p className="hero-subtitle">
            Engineered for speed, accuracy (±1%), and GMP compliance. 
            Trusted by top pharma companies for Washing, Filling, Capping, and Labeling solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
            <Link to="/products" className="btn btn-secondary">
              View All Machines
            </Link>
          </div>
        </div>
      </section>

      {/* --- TRUST METRICS --- */}
      <section className="stats-bar">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Machines Installed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">GMP Compliant</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Service</span>
          </div>
        </div>
      </section>

      {/* --- PRODUCT CATEGORIES --- */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Solutions</h2>
            <div className="title-underline"></div>
            <p className="section-desc">High-performance machinery for every stage of your production line.</p>
          </div>

          <div className="category-grid">
            <Link to="/products" className="cat-card">
              <div className="cat-icon-box blue">
                <Truck size={32} />
              </div>
              <h3>Bottle Washing</h3>
              <p>Rotary & Linear washing machines with multi-stage inner/outer wash cycles.</p>
              <span className="learn-more">Explore <ArrowRight size={16} /></span>
            </Link>

            <Link to="/products" className="cat-card">
              <div className="cat-icon-box green">
                <Settings size={32} />
              </div>
              <h3>Liquid Filling</h3>
              <p>Servo & Piston based fillers with ±0.5% accuracy for viscous & non-viscous liquids.</p>
              <span className="learn-more">Explore <ArrowRight size={16} /></span>
            </Link>

            <Link to="/products" className="cat-card">
              <div className="cat-icon-box dark">
                <ShieldCheck size={32} />
              </div>
              <h3>Capping & Sealing</h3>
              <p>ROPP & Screw capping machines with adjustable torque and "No Bottle No Cap" systems.</p>
              <span className="learn-more">Explore <ArrowRight size={16} /></span>
            </Link>

            <Link to="/products" className="cat-card">
              <div className="cat-icon-box blue">
                <CheckCircle size={32} />
              </div>
              <h3>Sticker Labeling</h3>
              <p>High-speed wrap-around labeling for round, flat, and oval bottles.</p>
              <span className="learn-more">Explore <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="section features-section">
        <div className="container features-container">
          <div className="features-text">
            <h2 className="section-title">Why Leading Brands Choose Aegro Tech</h2>
            <p className="feature-intro">
              We don't just build machines; we engineer reliability. Our equipment is designed 
              to minimize downtime and maximize output.
            </p>
            
            <ul className="feature-list">
              <li>
                <CheckCircle className="f-icon" size={20} />
                <div>
                  <strong>GMP Standard Build:</strong>
                  <p>Full S.S. 304/316 construction with matt finish.</p>
                </div>
              </li>
              <li>
                <CheckCircle className="f-icon" size={20} />
                <div>
                  <strong>High Accuracy:</strong>
                  <p>Filling accuracy of ±0.5% to ±1% prevents wastage.</p>
                </div>
              </li>
              <li>
                <CheckCircle className="f-icon" size={20} />
                <div>
                  <strong>Smart Automation:</strong>
                  <p>"No Bottle - No Fill" and "No Cap" safety systems included.</p>
                </div>
              </li>
              <li>
                <CheckCircle className="f-icon" size={20} />
                <div>
                  <strong>Easy Maintenance:</strong>
                  <p>Tool-less changeover parts for different bottle sizes.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="features-image-placeholder">
            <div className="tech-viz">
              <span>High Precision<br/>Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CLIENTS STRIP --- */}
      <section className="section clients-section">
        <div className="container">
          <h2 className="section-title center">Trusted By</h2>
          <div className="clients-wrapper">
             <div className="client-names">
               <span>Sidhbali Formulations</span>
               <span>Poly Care Herbals</span>
               <span>Associated Biotech</span>
               <span>Vox Dei Labs</span>
               <span>Ayukalp</span>
               <span>UAP Pharma</span>
               <span>Aditya Biotech</span>
               <span>Green Cross Remedies</span>
               <span>Alar Laboratories</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Upgrade Your Production Line?</h2>
          <p>Get a custom quote for your specific bottle sizes and output requirements today.</p>
          <Link to="/contact" className="btn btn-white">
            Request Quotation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
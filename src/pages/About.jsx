import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, Heart, Factory, MapPin, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      
      {/* --- HERO SECTION --- */}
      <div className="about-hero">
        <div className="container">
          <span className="hero-badge-outline">Since 1996</span>
          <h1>Engineering Excellence in <br/>Pharma Machinery</h1>
          <p>
            Aegro Tech Farma (Techno Pharma) is a leading manufacturer dedicated to 
            precision, innovation, and GMP-compliant packaging solutions.
          </p>
        </div>
      </div>

      {/* --- OUR STORY --- */}
      <section className="section story-section">
        <div className="container story-container">
          <div className="story-content">
            <span className="section-subtitle">Who We Are</span>
            <h2>Precision Engineering from Ahmedabad to the World</h2>
            <div className="title-underline-left"></div>
            <p>
              [cite_start]Located in the industrial hub of <strong>Ahmedabad, Gujarat</strong>[cite: 154], Aegro Tech Farma has established itself 
              as a trusted name in the pharmaceutical engineering sector. We specialize in designing 
              [cite_start]and manufacturing high-speed packaging lines including Washing, Filling, Capping, and Labeling machines[cite: 4].
            </p>
            <p>
              Our philosophy is simple: <strong>Build it right, build it to last.</strong> Every machine 
              [cite_start]that leaves our factory is constructed from high-grade <strong>AISI S.S. 304/316</strong> [cite: 20] 
              [cite_start]and rigorously tested to ensure it meets strict GMP norms[cite: 99, 121].
            </p>
            <div className="story-stats">
              <div className="s-stat">
                <strong>100%</strong>
                <span>Stainless Steel Construction</span>
              </div>
              <div className="s-stat">
                <strong>±1%</strong>
                <span>Filling Accuracy</span>
              </div>
            </div>
          </div>
          
          <div className="story-image">
            <div className="image-card">
              <Factory size={64} className="factory-icon" />
              <h3>State-of-the-Art Manufacturing</h3>
              <p>Our facility in Bakrol is equipped with modern fabrication tools to ensure precision in every component.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-card">
            <Target size={40} className="m-icon" />
            <h3>Our Mission</h3>
            <p>To provide pharmaceutical companies with robust, zero-maintenance machinery that enhances productivity while ensuring absolute safety and hygiene.</p>
          </div>
          <div className="mission-card">
            <Award size={40} className="m-icon" />
            <h3>Our Vision</h3>
            <p>To be the globally preferred partner for packaging automation, known for our integrity, technical support, and engineering superiority.</p>
          </div>
          <div className="mission-card">
            <Heart size={40} className="m-icon" />
            <h3>Core Values</h3>
            <p>We believe in transparency, customer-first service, and uncompromised quality. If a machine isn't perfect, it doesn't leave our floor.</p>
          </div>
        </div>
      </section>

      {/* --- QUALITY PROMISE --- */}
      <section className="section quality-section">
        <div className="container">
          <div className="quality-box">
            <div className="quality-text">
              <h2>The Aegro Quality Standard</h2>
              <p>
                [cite_start]Our machines are designed for "Trouble-Free Performance"[cite: 20]. 
                We use self-lubricating guides, vibration-free construction, and branded electrical components 
                to ensure your production line never stops.
              </p>
              <ul className="quality-list">
                [cite_start]<li>Rigid Vibration Free Construction [cite: 49]</li>
                [cite_start]<li>Matt Finished S.S. Body [cite: 50]</li>
                [cite_start]<li>No Bottle - No Fill Safety Systems [cite: 47]</li>
                [cite_start]<li>Low Noise & Power Consumption [cite: 73]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCATION / CTA --- */}
      <section className="location-cta">
        <div className="container location-content">
          <MapPin size={40} className="loc-icon" />
          <h2>Visit Our Facility</h2>
          <p>
            23, Shivbhumi-4, Near Shahitya Hub, Kujad-Gatrad Road,<br/>
            [cite_start]Bakrol, Ahmedabad - 382430 [cite: 154]
          </p>
          <Link to="/contact" className="btn-visit">
            Schedule a Visit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
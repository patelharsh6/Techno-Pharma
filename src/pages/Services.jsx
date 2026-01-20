import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Settings, Users, FileCheck, Truck, Activity, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesList = [
    {
      id: 1,
      icon: <Settings size={40} />,
      title: "Installation & Commissioning",
      description: "Complete onsite installation of your washing, filling, and sealing lines. Our engineers ensure your machines are calibrated for optimal speed and accuracy (±1%) from Day 1."
    },
    {
      id: 2,
      icon: <Wrench size={40} />,
      title: "Spare Parts Support",
      description: "We manufacture and stock genuine spare parts for all our models (TPE/RWM, ALF, etc.) to minimize downtime. Quick dispatch for critical components."
    },
    {
      id: 3,
      icon: <Activity size={40} />,
      title: "Annual Maintenance (AMC)",
      description: "Preventative maintenance contracts to keep your production line running smoothly. Includes regular inspections, lubrication, and part replacements."
    },
    {
      id: 4,
      icon: <Users size={40} />,
      title: "Operator Training",
      description: "We train your staff on machine operation, safety protocols, and basic troubleshooting. Proper training ensures higher efficiency and longer machine life."
    },
    {
      id: 5,
      icon: <FileCheck size={40} />,
      title: "GMP Documentation",
      description: "Support for validation documents including DQ, IQ, OQ, and PQ to help you meet strict pharmaceutical regulatory standards."
    },
    {
      id: 6,
      icon: <Truck size={40} />,
      title: "Line Integration",
      description: "Expertise in connecting individual machines (Washer → Filler → Capper → Labeler) into a seamless, fully automated production line."
    }
  ];

  return (
    <div className="services-page">
      
      {/* --- HERO SECTION --- */}
      <div className="services-hero">
        <div className="container">
          <span className="hero-tag">Total Support</span>
          <h1>Expert Services & Support</h1>
          <p>Beyond manufacturing, we provide the technical expertise to keep your plant running at peak efficiency.</p>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {servicesList.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS STRIP --- */}
      <section className="process-strip">
        <div className="container">
          <div className="process-flex">
            <div className="process-step">
              <span className="step-num">01</span>
              <h4>Consultation</h4>
              <p>We analyze your bottle sizes & output needs.</p>
            </div>
            <div className="process-divider"></div>
            <div className="process-step">
              <span className="step-num">02</span>
              <h4>Manufacturing</h4>
              <p>Precision fabrication using S.S. 304 materials.</p>
            </div>
            <div className="process-divider"></div>
            <div className="process-step">
              <span className="step-num">03</span>
              <h4>Installation</h4>
              <p>On-site setup and trial runs.</p>
            </div>
            <div className="process-divider"></div>
            <div className="process-step">
              <span className="step-num">04</span>
              <h4>Support</h4>
              <p>Lifetime technical assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Need a Spare Part or Service Visit?</h2>
              <p>Contact our support team for immediate assistance.</p>
            </div>
            <Link to="/contact" className="btn-service-cta">
              Contact Support <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
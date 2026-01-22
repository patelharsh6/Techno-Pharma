import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Smartphone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      
      {/* --- HERO SECTION --- */}
      <div className="contact-hero">
        <div className="container hero-content-center">
          <h1>Get in Touch</h1>
          <p>Ready to optimize your production line? Connect with us directly.</p>
        </div>
      </div>

      {/* --- MAIN FLOATING CARD --- */}
      <div className="container contact-wrapper-container">
        <div className="contact-card">
          
          {/* LEFT PANEL: INFO (Dark Blue) */}
          <div className="contact-info-panel">
            <h2>Contact Information</h2>
            <p className="info-subtext">Reach out to our sales engineering team directly.</p>

            <div className="info-item">
              <MapPin className="c-icon" size={24} />
              <div>
                <h3>Factory Address</h3>
                <p>
                  23, Shivbhumi-4, Near Shahitya Hub,<br />
                  Kujad-Gatrad Road, Bakrol,<br />
                  Ahmedabad - 382430
                </p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="c-icon" size={24} />
              <div>
                <h3>Phone Numbers</h3>
                <p><a href="tel:+919328058223">+91 9328058223</a></p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="c-icon" size={24} />
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:technopharmaeng@gmail.com">technopharmaeng@gmail.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="c-icon" size={24} />
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="circle-deco"></div>
          </div>

          {/* RIGHT PANEL: DIRECT ACTIONS (White) - NO BACKEND REQUIRED */}
          <div className="contact-actions-panel">
            <h2>Connect Instantly</h2>
            <p className="action-subtext">
              Skip the forms. Choose your preferred way to talk to our engineers right now.
            </p>
            
            <div className="action-buttons-grid">
              
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/919328058223?text=Hi,%20I%20am%20interested%20in%20your%20machinery." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="action-card whatsapp"
              >
                <div className="icon-box green">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h3>Chat on WhatsApp</h3>
                  <p>Fastest response time</p>
                </div>
                <ArrowRight className="arrow-icon" />
              </a>

              {/* Email Button */}
              <a 
                href="mailto:technopharmaeng@gmail.com?subject=Inquiry%20for%20Pharma%20Machinery" 
                className="action-card email"
              >
                <div className="icon-box blue">
                  <Mail size={32} />
                </div>
                <div>
                  <h3>Send an Email</h3>
                  <p>Get a detailed quote</p>
                </div>
                <ArrowRight className="arrow-icon" />
              </a>

              {/* Call Button */}
              <a href="tel:+919328058223" className="action-card phone">
                <div className="icon-box dark">
                  <Smartphone size={32} />
                </div>
                <div>
                  <h3>Call Sales Directly</h3>
                  <p>+91 9328058223</p>
                </div>
                <ArrowRight className="arrow-icon" />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* --- FULL WIDTH MAP --- */}
      <div className="map-section">
        <iframe 
          title="Aegro Tech Farma Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.253079965008!2d72.6738446153392!3d22.90382838501314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a22fc92719%3A0x6283b5443306173a!2sBakrol%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1628154921000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>

    </div>
  );
};

export default Contact;
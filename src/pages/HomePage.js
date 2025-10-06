import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaitlistForm from '../components/WaitlistForm';
import './HomePage.css';

const HomePage = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="home-page">
      <Header />
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Medical care with a maternal heart</h1>
            <p className="hero-subtitle">
              MammaMed delivers personalized prenatal care with less stress, less confusion.
              Monitor your pregnancy journey with clarity and confidence.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setShowWaitlist(true)}
              >
                Join Waitlist
              </button>
              <Link to="/mother" className="btn btn-secondary btn-large">
                Take a Tour 🤳
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/kelly-sikkema-IE8KfewAp-w-unsplash.jpg" alt="Pregnant woman using MammaMed app" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-gradient">MammaMed</span>?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/stethoscope_100dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.svg" alt="Personalized Care" />
              </div>
              <h3>Personalized Care</h3>
              <p>Lab results with personalized ranges and educational explanations tailored to your pregnancy stage.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/monitor_heart_100dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.svg" alt="Continuous Monitoring" />
              </div>
              <h3>Continuous Monitoring</h3>
              <p>Track your pregnancy journey with real-time updates and insights from your healthcare provider.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/diversity_4_100dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.svg" alt="Supportive Community" />
              </div>
              <h3>Supportive Community</h3>
              <p>Connect with other expectant mothers to share experiences and get advice in a safe environment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/school_100dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.svg" alt="Educational Resources" />
              </div>
              <h3>Educational Resources</h3>
              <p>Access evidence-based information about pregnancy, childbirth, and early parenthood.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <div className="container">
          <h2 className="section-title">Experience MammaMed</h2>
          <div className="demo-cards">
            <div className="demo-card">
              <div className="demo-image">
                <img src="/images/ignacio-campo-FKOjXAbJWlw-unsplash.jpg" alt="MammaMed Patient App" />
              </div>
              <h3>Mobile App</h3>
              <p>Experience the user-friendly interface designed for expectant mothers to track their pregnancy journey.</p>
              <Link to="/mother" className="btn btn-primary">
                Try App Demo
              </Link>
            </div>
            <div className="demo-card">
              <div className="demo-image">
                <img src="/images/patty-brito-Y-3Dt0us7e0-unsplash.jpg" alt="MammaMed Doctor Dashboard" />
              </div>
              <h3>Doctor Dashboard</h3>
              <p>See how healthcare providers monitor patient progress and provide personalized care recommendations.</p>
              <Link to="/doctor" className="btn btn-primary">
                Try Doctor Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="waitlist-section">
        <div className="container">
          <div className="waitlist-content">
            <h2>Be the First to Experience MammaMed</h2>
            <p>Join our waitlist to get early access to the MammaMed platform and receive updates on our launch.</p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowWaitlist(true)}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {showWaitlist && (
        <WaitlistForm onClose={() => setShowWaitlist(false)} />
      )}

      <Footer />
    </div>
  );
};

export default HomePage;

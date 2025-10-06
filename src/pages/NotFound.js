import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Header />
      
      <main className="not-found-main">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon">
              <h1>404</h1>
            </div>
            
            <div className="not-found-text">
              <h2>Oops! Page Not Found</h2>
              <p>
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track with your pregnancy journey.
              </p>
            </div>
            
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
              <Link to="/mother" className="btn btn-secondary">
                Try Patient Demo
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

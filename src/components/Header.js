import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">
              Mamma<span className="logo-light">Med</span>
            </span>
          </Link>
          
          <nav className="main-nav">
            <ul>
              <li><Link to="/mother">Patient Demo</Link></li>
              <li><Link to="/doctor">Doctor Demo</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

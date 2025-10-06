import React, { useState } from 'react';
import './WaitlistForm.css';

const WaitlistForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'patient',
    dueDate: '',
    hospital: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };
  
  return (
    <div className="waitlist-form-overlay">
      <div className="waitlist-form-container">
        <button className="close-button" onClick={onClose}>×</button>
        
        {!submitted ? (
          <>
            <h2>Join the MammaMed Waitlist</h2>
            <p className="form-subtitle">Be among the first to experience personalized prenatal care with less stress, less confusion.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Information (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                Join Waitlist
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>You've been added to our waitlist. We'll notify you when MammaMed is ready for you to try.</p>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;

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
    // In a real app, this would send the data to a server
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
                <label>I am a:</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="role"
                      value="patient"
                      checked={formData.role === 'patient'}
                      onChange={handleChange}
                    />
                    Expectant Mother
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="role"
                      value="doctor"
                      checked={formData.role === 'doctor'}
                      onChange={handleChange}
                    />
                    Healthcare Provider
                  </label>
                </div>
              </div>
              
              {formData.role === 'patient' && (
                <div className="form-group">
                  <label htmlFor="dueDate">Expected Due Date (if known)</label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                  />
                </div>
              )}
              
              {formData.role === 'doctor' && (
                <div className="form-group">
                  <label htmlFor="hospital">Hospital/Clinic Name</label>
                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                  />
                </div>
              )}
              
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

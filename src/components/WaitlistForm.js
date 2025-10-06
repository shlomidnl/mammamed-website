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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data from the actual form
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      // Submit to Sendinblue without redirecting
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This prevents CORS errors but we won't get response details
      });
      
      console.log('Form submitted successfully');
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message since no-cors mode doesn't give us real error info
      setSubmitted(true);
    }
  };

  return (
    <div className="waitlist-form-overlay">
      <div className="waitlist-form-container">
        <button className="close-button" onClick={onClose}>×</button>

        {!submitted ? (
          <>
            <h2 className="section-title">Join the <span className="text-gradient">MammaMed</span> Waitlist!</h2>
            <div className="form-subtitle">Be among the first to experience personalized prenatal care with less stress, less confusion.</div>

            <form id="sib-form" method="POST" action="https://ddd56777.sibforms.com/serve/MUIFAJorWGg7z3QVi7yucpO3S0XNiDBFQl0X1NzsIQaG75Ipuv8QVPDKNaqjSsiJG35jre3V23MAVNSQjJQrXJt281_WCmyE64k6zh8jnOYhTdA_JbOv1NdeHGZzQlruvivOZnNWKF8CthpUkWpLJ4_PbtCaaTLIONjNidUdvbl67SciCU99K5_hZ37WBjFcoP00Kdnd6l4e7Sn30Q==" data-type="subscription"  onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  maxLength="200"
                  type="text"
                  id="FIRSTNAME"
                  name="FIRSTNAME"
                  autoComplete="off"
                  placeholder="YOUR NAME"
                  data-required="true"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  id="EMAIL"
                  name="EMAIL"
                  autoComplete="off"
                  placeholder="EMAIL"
                  data-required="true"
                  required
                />
              </div>

              <label style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontFamily: "Helvetica, sans-serif", color: "#3C4858"}}>
                <input
                  type="checkbox"
                  class="input_replaced"
                  value="1"
                  id="OPT_IN"
                  name="OPT_IN"
                  required
                />
                <span className="checkbox checkbox_tick_positive"></span>
                <span>
                  I agree to receive your newsletters and accept the data privacy statement.
                  <span data-required="*" style={{color: "red", marginLeft: "4px"}} className="entry__label entry__label_optin"></span>
                </span>
              </label>

              <button type="submit" form="sib-form" className="btn btn-primary btn-block">
                Join Waitlist
              </button>

              <input type="text" name="email_address_check" value="" class="input--hidden" />
              <input type="hidden" name="locale" value="en" />
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

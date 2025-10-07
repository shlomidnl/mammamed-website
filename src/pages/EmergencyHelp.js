import React from 'react';
import './EmergencyHelp.css';

const EmergencyHelp = ({ onClose = null }) => {
  const emergencyContacts = [
    {
      id: 1,
      name: 'Ambulance',
      phone: '113',
      description: 'For life-threatening emergencies',
      icon: 'ambulance'
    },
    {
      id: 2,
      name: 'Emergency Doctor',
      phone: '+371 12312312',
      description: 'On-call obstetrician',
      icon: 'doctor'
    },
    {
      id: 3,
      name: 'Emergency Center',
      phone: '+371 45645645',
      description: 'Maternity Hospital Emergency Department',
      icon: 'hospital'
    },
    {
      id: 4,
      name: 'Clinic Administration',
      phone: '+371 10020030',
      description: '24/7 support line',
      icon: 'admin'
    },
    {
      id: 5,
      name: 'Midwife Hotline',
      phone: '+371 40050060',
      description: '24/7 midwife consultation',
      icon: 'midwife'
    }
  ];

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="emergency-container">
      <div className="emergency-header">
        <div className="emergency-title">
          <svg className="emergency-icon" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M19.82 2H4.18C2.97 2 2 2.97 2 4.18v15.64C2 21.03 2.97 22 4.18 22h15.64c1.21 0 2.18-.97 2.18-2.18V4.18C22 2.97 21.03 2 19.82 2zM7 13H5v-2h2v2zm0-4H5V7h2v2zm4 4H9v-2h2v2zm0-4H9V7h2v2zm4 4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
          </svg>
          <h2>Emergency Help</h2>
        </div>
        {onClose && <button className="emergency-close" onClick={onClose}>×</button>}
      </div>
      
      <div className="emergency-content">
        <div className="emergency-message">
          <svg className="warning-icon" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"></path>
          </svg>
          <p>
            If you are experiencing a medical emergency, please call 113 immediately 
            or go to your nearest emergency room.
          </p>
        </div>
        
        <div className="contact-list">
          {emergencyContacts.map(contact => (
            <div key={contact.id} className="contact-card">
              <div className="contact-icon">
                {contact.icon === 'ambulance' && (
                  <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M18 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0M19.5 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0M6 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0M20 8l3 4v5h-2a3 3 0 01-6 0h-4a3 3 0 01-6 0H3v-5l3-4h14M6 10V5H4v5H3l3-4h11l3 4h-1v-5h-2v5H6z"></path>
                  </svg>
                )}
                {contact.icon === 'doctor' && (
                  <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M14.84 16.26C17.86 16.83 20 18.29 20 20v2H4v-2c0-1.71 2.14-3.17 5.16-3.74L12 21l2.84-4.74M8 8h8v2a4 4 0 01-8 0V8m.5-4A1.5 1.5 0 008 5.5V6h8v-.5A1.5 1.5 0 0015.5 4h-7z"></path>
                  </svg>
                )}
                {contact.icon === 'hospital' && (
                  <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M2 22V7a1 1 0 011-1h4V2h10v4h4a1 1 0 011 1v15h-8v-5h-4v5H2M9 4v6h2V8h2v2h2V4H9m-5 8h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1v3H4v-3z"></path>
                  </svg>
                )}
                {contact.icon === 'admin' && (
                  <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z"></path>
                  </svg>
                )}
                {contact.icon === 'midwife' && (
                  <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m-1.5 5h3c1.86 0 3.43 1.27 3.87 3h-1.97a2 2 0 00-2-2h-3a2 2 0 00-2 2v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V14h1v3.5c0 1.94-1.56 3.5-3.5 3.5S6 19.44 6 17.5V10c0-1.65 1.35-3 3-3m9.5 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 6c2.21 0 4 1.79 4 4v1h-8v-1c0-2.21 1.79-4 4-4z"></path>
                  </svg>
                )}
              </div>
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <p>{contact.description}</p>
                <button 
                  className="call-button"
                  onClick={() => handleCall(contact.phone)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                  {contact.phone}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelp;

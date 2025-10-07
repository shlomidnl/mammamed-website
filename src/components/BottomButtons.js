import React from 'react';
import './BottomButtons.css';

const BottomButtons = ({ setActiveTab }) => {
  const handleChatClick = () => {
    setActiveTab('chat');
  };

  const handleEmergencyClick = () => {
    setActiveTab('emergency');
  };

  return (
    <div className="bottom-buttons-container">
      <button
        className="bottom-button chat-button"
        onClick={handleChatClick}
      >
        <svg className="button-icon" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
        </svg>
        Chat with Doctor
      </button>

      <button
        className="bottom-button emergency-button"
        onClick={handleEmergencyClick}
      >
        <svg className="button-icon" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
          <path d="M18 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0M19.5 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0M6 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0M20 8l3 4v5h-2a3 3 0 01-6 0h-4a3 3 0 01-6 0H3v-5l3-4h14M6 10V5H4v5H3l3-4h11l3 4h-1v-5h-2v5H6z"></path>
        </svg>
        Emergency Help
      </button>
    </div>
  );
};

export default BottomButtons;

import React, { useState } from 'react';
import './ChatWithDoctor.css';

const ChatWithDoctor = ({ onClose = null }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'system',
      text: 'You are now connected with Dr. Ance Sproge. How can I help you today?',
      time: '10:30 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Predefined doctor responses
  const doctorResponses = [
    {
      id: 3,
      sender: 'doctor',
      text: "Thank you for reaching out and welcome to MammaMed! How can I assist you today?",
      time: (new Date()).toLocaleTimeString("en-US")
    },
        {
      id: 3,
      sender: 'doctor',
      text: "By the way, I don't know to do anything, I'm just a demo doctor... 😉",
      time: (new Date()).toLocaleTimeString("en-US")
    }
  ];

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newUserMessage]);
    setInputText('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate doctor response after delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, ...doctorResponses]);
    }, 2000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="doctor-info">
          <img 
            src="https://randomuser.me/api/portraits/women/68.jpg" 
            alt="Dr. Ance Sproge" 
            className="doctor-avatar" 
          />
          <div>
            <h3>Dr. Ance Sproge</h3>
            <p>Obstetrician • Online</p>
          </div>
        </div>
        {onClose && <button className="close-button" onClick={onClose}>×</button>}
      </div>
      
      <div className="chat-messages">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.sender === 'user' ? 'user-message' : 'doctor-message'}`}
          >
            {message.sender === 'system' && (
              <div className="system-message">{message.text}</div>
            )}
            
            {message.sender === 'doctor' && (
              <>
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Dr. Ance Sproge" 
                  className="message-avatar" 
                />
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">{message.time}</div>
                </div>
              </>
            )}
            
            {message.sender === 'user' && (
              <div className="message-content user">
                <div className="message-text">{message.text}</div>
                <div className="message-time">{message.time}</div>
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="message doctor-message">
            <img 
              src="https://randomuser.me/api/portraits/women/68.jpg" 
              alt="Dr. Ance Sproge" 
              className="message-avatar" 
            />
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          placeholder="Hi Dr. Sproge, I've been having headaches and feeling dizzy today..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button 
          className="send-button"
          onClick={handleSendMessage}
          disabled={inputText.trim() === ''}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWithDoctor;

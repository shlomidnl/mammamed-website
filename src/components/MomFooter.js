import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterButton>
        <ButtonIcon>💬</ButtonIcon>
        Chat with Doctor
      </FooterButton>
      <FooterButton emergency>
        <ButtonIcon>🚑</ButtonIcon>
        Emergency Help
      </FooterButton>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 30px;
`;

const FooterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.emergency ? '#F44336' : '#4CAF50'};
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const ButtonIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export default Footer;

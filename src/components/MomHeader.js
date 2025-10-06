import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Your Pregnancy Journey</Title>
      <Subtitle>Personalized care and support every step of the way</Subtitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #333;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #666;
`;

export default Header;

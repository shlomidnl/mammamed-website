import React from 'react';
import styled from 'styled-components';

const ProgressTracker = ({ currentWeek, startDate, endDate }) => {
  // Calculate progress percentage (assuming 40 weeks total)
  const progressPercentage = (currentWeek / 40) * 100;
  
  return (
    <ProgressContainer>
      <WeekIndicator>
        <WeekIcon>⏱️</WeekIcon>
        <WeekText>Week {currentWeek} of Your Journey</WeekText>
      </WeekIndicator>
      <Encouragement>You're doing amazing in your first trimester! 🌸</Encouragement>
      
      <ProgressLabel>Journey Progress</ProgressLabel>
      <ProgressBarContainer>
        <ProgressBarFill style={{ width: `${progressPercentage}%` }} />
        <ProgressPercentage>{Math.round(progressPercentage)}%</ProgressPercentage>
      </ProgressBarContainer>
      
      <BabySize>Your baby is about the size of a lime and growing beautifully! 🍋</BabySize>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  background: linear-gradient(135deg, #FF5F9E, #A239EA);
  border-radius: 15px;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
`;

const WeekIndicator = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const WeekIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const WeekText = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 0;
`;

const Encouragement = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  margin-bottom: 20px;
`;

const ProgressLabel = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`;

const ProgressBarContainer = styled.div`
  height: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  position: relative;
  margin-bottom: 15px;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 5px;
`;

const ProgressPercentage = styled.div`
  position: absolute;
  right: 0;
  top: -20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

const BabySize = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  margin-top: 10px;
`;

export default ProgressTracker;

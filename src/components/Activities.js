import React, { useState } from 'react';
import styled from 'styled-components';

const Activities = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: 'First Visit to Gynecologist',
      timing: 'Up to Week 12',
      completed: true
    },
    {
      id: 2,
      title: 'Blood Tests',
      timing: 'Up to Week 12',
      completed: true
    },
    {
      id: 3,
      title: 'Early Ultrasound',
      timing: 'Weeks 6-10',
      completed: true
    },
    {
      id: 4,
      title: 'Genetic Screening',
      timing: 'Weeks 11-13',
      completed: false
    },
    {
      id: 5,
      title: 'Nuchal Translucency Ultrasound',
      timing: 'Weeks 11-13',
      completed: false
    },
    {
      id: 6,
      title: 'Prenatal Vitamins Regimen',
      timing: 'Throughout Pregnancy',
      completed: true
    },
    {
      id: 7,
      title: 'Dental Check-up',
      timing: 'First Trimester',
      completed: false
    }
  ]);
  
  const toggleActivity = (id) => {
    setActivities(activities.map(activity => 
      activity.id === id ? { ...activity, completed: !activity.completed } : activity
    ));
  };
  
  return (
    <ActivitiesContainer>
      <InfoBox>
        <InfoIcon>ℹ️</InfoIcon>
        <InfoContent>
          <InfoTitle>First Trimester Activities</InfoTitle>
          <InfoText>Track your important prenatal activities and appointments. Check them off as you complete them.</InfoText>
        </InfoContent>
      </InfoBox>
      
      <ActivitiesList>
        {activities.map(activity => (
          <ActivityItem key={activity.id}>
            <CheckboxContainer onClick={() => toggleActivity(activity.id)}>
              <Checkbox completed={activity.completed}>
                {activity.completed && '✓'}
              </Checkbox>
            </CheckboxContainer>
            <ActivityContent>
              <ActivityTitle completed={activity.completed}>{activity.title}</ActivityTitle>
              <ActivityTiming>{activity.timing}</ActivityTiming>
            </ActivityContent>
          </ActivityItem>
        ))}
      </ActivitiesList>
      
      <AddButton>
        <AddIcon>+</AddIcon>
        Add Custom Activity
      </AddButton>
    </ActivitiesContainer>
  );
};

const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #E3F2FD;
  border-left: 4px solid #2196F3;
  border-radius: 5px;
  padding: 15px;
`;

const InfoIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #2196F3;
  margin: 0 0 5px 0;
`;

const InfoText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const ActivitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const CheckboxContainer = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;

const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid ${props => props.completed ? '#4CAF50' : '#E91E63'};
  background-color: ${props => props.completed ? '#4CAF50' : 'transparent'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.2s ease;
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  opacity: ${props => props.completed ? 0.7 : 1};
`;

const ActivityTiming = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #757575;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #E91E63, #9C27B0);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const AddIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export default Activities;

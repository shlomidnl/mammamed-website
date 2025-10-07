import React from 'react';
import styled from 'styled-components';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'wellness', label: 'Wellness', icon: '❤️' },
    { id: 'appointments', label: 'Visits', icon: '📅' },
    { id: 'lab-results', label: 'Labs', icon: '🧪' },
    { id: 'activities', label: 'Tasks', icon: '✓' },
    { id: 'learn', label: 'Learn', icon: '📚' },
    { id: 'community', label: 'Community', icon: '👥' },
  ];

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <Tab 
          key={tab.id} 
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          <TabIcon>{tab.icon}</TabIcon>
          <TabLabel>{tab.label}</TabLabel>
        </Tab>
      ))}
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }
  
`;

const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${props => props.active ? '#F5F5F5' : 'white'};
  border: none;
  border-bottom: ${props => props.active ? '3px solid #E91E63' : '3px solid transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #F5F5F5;
  }
`;

const TabIcon = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
`;

const TabLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #333;
`;

export default TabNavigation;

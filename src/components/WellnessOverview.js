import React from 'react';
import styled from 'styled-components';

const WellnessOverview = () => {
  const wellnessCategories = [
    { name: 'Pregnancy Wellness', status: 'Excellent' },
    { name: 'Energy & Metabolism', status: 'Excellent' },
    { name: 'Blood Health', status: 'Keep Watching' },
    { name: 'Overall Wellness', status: 'Doing Great!' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent':
        return '#4CAF50';
      case 'Keep Watching':
        return '#2196F3';
      case 'Doing Great!':
        return '#4CAF50';
      default:
        return '#757575';
    }
  };

  return (
    <WellnessContainer>
      <WellnessHeader>
        <WellnessIcon>❤️</WellnessIcon>
        <WellnessTitle>Your Wellness Overview</WellnessTitle>
      </WellnessHeader>
      <WellnessDescription>Based on your recent health check-ups</WellnessDescription>
      
      <CategoriesList>
        {wellnessCategories.map((category, index) => (
          <CategoryItem key={index}>
            <CategoryName>{category.name}</CategoryName>
            <CategoryStatus style={{ color: getStatusColor(category.status) }}>
              {category.status}
            </CategoryStatus>
          </CategoryItem>
        ))}
      </CategoriesList>
    </WellnessContainer>
  );
};

const WellnessContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const WellnessHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const WellnessIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const WellnessTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const WellnessDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const CategoryName = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
`;

const CategoryStatus = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

export default WellnessOverview;

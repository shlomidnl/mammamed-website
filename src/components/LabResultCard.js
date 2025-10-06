import React, { useState } from 'react';
import styled from 'styled-components';

const LabResultCard = ({ result }) => {
  const [expanded, setExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent':
        return '#4CAF50';
      case 'Keep Watching':
        return '#2196F3';
      case 'Needs Attention':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  const getStatusBackground = (status) => {
    switch (status) {
      case 'Excellent':
        return '#E8F5E9';
      case 'Keep Watching':
        return '#E3F2FD';
      case 'Needs Attention':
        return '#FFEBEE';
      default:
        return '#F5F5F5';
    }
  };

  return (
    <CardContainer style={{ backgroundColor: result.color }}>
      <CardHeader>
        <ResultName>{result.name}</ResultName>
        <UpdatedTime>Updated {result.updated}</UpdatedTime>
      </CardHeader>

      <ResultValueContainer>
        <ResultValue>{result.value}</ResultValue>
        <ResultUnit>{result.unit}</ResultUnit>
      </ResultValueContainer>

      <StatusBadge style={{ 
        backgroundColor: getStatusBackground(result.status),
        color: getStatusColor(result.status)
      }}>
        {result.status}
      </StatusBadge>

      <RangeContainer>
        <RangeItem>
          <RangeLabel>Your Range:</RangeLabel>
          <RangeValue>{result.yourRange}</RangeValue>
        </RangeItem>
        <RangeItem>
          <RangeLabel>Typical Range:</RangeLabel>
          <RangeValue>{result.typicalRange}</RangeValue>
        </RangeItem>
      </RangeContainer>

      <SectionTitle>What This Means:</SectionTitle>
      <SectionText>{result.meaning}</SectionText>

      <SectionTitle>Your Results:</SectionTitle>
      <SectionText>{result.results}</SectionText>

      <NextSteps>
        <NextStepsLabel>Next Steps:</NextStepsLabel>
        <NextStepsText>{result.nextSteps}</NextStepsText>
      </NextSteps>

      <CategoryTag>{result.category}</CategoryTag>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ResultName = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const UpdatedTime = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #757575;
`;

const ResultValueContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
`;

const ResultValue = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #333;
`;

const ResultUnit = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #757575;
  margin-left: 5px;
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 15px;
`;

const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

const RangeItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RangeLabel = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #757575;
`;

const RangeValue = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
  font-weight: 600;
`;

const SectionTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin: 0 0 5px 0;
`;

const SectionText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin: 0 0 15px 0;
`;

const NextSteps = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const NextStepsLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

const NextStepsText = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #2196F3;
  margin-left: 5px;
`;

const CategoryTag = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #757575;
`;

export default LabResultCard;

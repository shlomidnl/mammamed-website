import React from 'react';
import styled from 'styled-components';
import LabResultCard from './LabResultCard';

const LabResults = () => {
  const labResults = [
    {
      id: 1,
      name: 'Hemoglobin',
      updated: '2 days ago',
      value: '10.2',
      unit: 'g/dL',
      status: 'Keep Watching',
      yourRange: '10.8-14.2',
      typicalRange: '11.0-15.0',
      meaning: 'Hemoglobin carries oxygen throughout your body. Lower levels during pregnancy are normal as your blood volume increases to support your growing baby.',
      results: 'Your hemoglobin level is slightly below the typical range. This is common during pregnancy as your body produces more blood volume. Your healthcare provider may suggest iron-rich foods or supplements to support healthy levels.',
      nextSteps: 'Discuss with your doctor about iron-rich foods and possible supplements',
      category: 'Blood Health',
      color: '#E3F2FD'
    },
    {
      id: 2,
      name: 'Glucose (Fasting)',
      updated: '1 week ago',
      value: '92',
      unit: 'mg/dL',
      status: 'Excellent',
      yourRange: '75-95',
      typicalRange: '70-100',
      meaning: 'Glucose is your body\'s main source of energy. Healthy levels during pregnancy help ensure proper nutrition for your developing baby.',
      results: 'Your glucose level is in an excellent range, showing your body is managing blood sugar well. This is a positive sign for both you and your baby\'s health.',
      nextSteps: 'Continue your current healthy eating habits',
      category: 'Energy & Metabolism',
      color: '#E8F5E9'
    },
    {
      id: 3,
      name: 'Preeclampsia Markers',
      updated: '3 days ago',
      value: '28',
      unit: 'ratio',
      status: 'Excellent',
      yourRange: '<35',
      typicalRange: '<38',
      meaning: 'These markers help assess your risk for preeclampsia, a condition involving high blood pressure during pregnancy. Your levels suggest this is less likely to occur.',
      results: 'Your preeclampsia screening markers are in a reassuring range. This suggests a lower likelihood of developing pregnancy-related high blood pressure in the coming weeks.',
      nextSteps: 'Continue regular prenatal checkups and monitor blood pressure',
      category: 'Pregnancy Wellness',
      color: '#E8F5E9'
    },
    {
      id: 4,
      name: 'Iron Stores (Ferritin)',
      updated: '2 days ago',
      value: '18',
      unit: 'ng/mL',
      status: 'Keep Watching',
      yourRange: '25-150',
      typicalRange: '15-200',
      meaning: 'Ferritin shows how much iron your body has stored. During pregnancy, you need extra iron to support increased blood volume and your baby\'s development.',
      results: 'Your iron stores are at the lower end of the normal range. This is common during pregnancy as your body uses more iron. Your doctor may recommend iron-rich foods or supplements.',
      nextSteps: 'Include iron-rich foods like spinach, lean meat, and beans in your diet',
      category: 'Nutrition',
      color: '#E3F2FD'
    },
    {
      id: 5,
      name: 'Thyroid Function (TSH)',
      updated: '1 week ago',
      value: '2.1',
      unit: 'mIU/L',
      status: 'Excellent',
      yourRange: '0.5-2.5',
      typicalRange: '0.4-4.0',
      meaning: 'TSH controls your thyroid gland, which produces hormones that affect your energy, mood, and your baby\'s development. Your levels are ideal.',
      results: 'Your thyroid function is working beautifully. This hormone helps regulate your metabolism and is important for your baby\'s brain development.',
      nextSteps: 'Continue current routine - your thyroid is functioning well',
      category: 'Hormonal Balance',
      color: '#E8F5E9'
    }
  ];

  return (
    <LabResultsContainer>
      <InfoBox>
        <InfoIcon>ℹ️</InfoIcon>
        <InfoContent>
          <InfoTitle>Understanding Your Results</InfoTitle>
          <InfoText>These results help track your wellness journey. Your healthcare provider will discuss any needed changes with you.</InfoText>
        </InfoContent>
      </InfoBox>
      
      {labResults.map(result => (
        <LabResultCard key={result.id} result={result} />
      ))}
    </LabResultsContainer>
  );
};

const LabResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export default LabResults;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PatientApp.css';
import styled from 'styled-components';
import Header from '../components/MomHeader';
import ProgressTracker from '../components/ProgressTracker';
import WellnessOverview from '../components/WellnessOverview';
import Appointments from '../components/Appointments';
import Activities from '../components/Activities';
import Learn from '../components/Learn';
import Community from '../components/Community';
import TabNavigation from '../components/TabNavigation';
import LabResults from '../components/LabResults';
import BottomButtons from '../components/BottomButtons';
import ChatWithDoctor from './ChatWithDoctor';
import EmergencyHelp from './EmergencyHelp';

const PatientApp = () => {
  const [activeTab, setActiveTab] = useState('wellness');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'lab-results':
        return <LabResults />;
      case 'activities':
        return <div><Activities /></div>;
      case 'community':
        return <div><Community /></div>;
      case 'appointments':
        return <div><Appointments /></div>;
      case 'wellness':
        return <WellnessOverview />;
      case 'learn':
        return <div><Learn /></div>;
      case 'chat':
        return <div><ChatWithDoctor /></div>;
      case 'emergency':
        return <div><EmergencyHelp /></div>;
      default:
        return <WellnessOverview />;
    }
  };

  return (
    <PageWrapper>
      <AppContainer>
        <Header />
        <MainContent>
          <ProgressTracker
            currentWeek={12}
            startDate="Jan 15, 2025"
            endDate="Sep 22, 2025"
          />
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <ContentArea>
            {renderContent()}
          </ContentArea>
        <BottomButtons setActiveTab={setActiveTab} />
        </MainContent>
      </AppContainer>

      <div className="demo-controls">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link to="/doctor" className="btn btn-secondary">
          View Doctor Board
        </Link>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px; /* Space for demo controls */
`;

const AppContainer = styled.div`
  flex: 1;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #FFF5F8;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 15px;
    margin: 0;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const DemoControls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid #e0e0e0;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
  z-index: 1000;
  
  .btn {
    padding: 12px 24px;
    border-radius: 25px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #E91E63, #9C27B0);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
    }
  }
  
  .btn-secondary {
    background: white;
    color: #E91E63;
    border: 2px solid #E91E63;
    
    &:hover {
      background: #E91E63;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px 15px;
    gap: 10px;
    
    .btn {
      padding: 10px 18px;
      font-size: 12px;
      flex: 1;
      text-align: center;
      max-width: 150px;
    }
  }
`;

export default PatientApp;

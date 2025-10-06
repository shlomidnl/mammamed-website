import React, { useState } from 'react';
import styled from 'styled-components';

const Appointments = () => {
  const [currentMonth, setCurrentMonth] = useState('October 2025');
  
  const upcomingAppointments = [
    {
      id: 1,
      title: 'Regular Prenatal Check-up',
      doctor: 'Dr. Anna',
      date: 'October 15, 2025',
      time: '10:30 AM',
      location: 'Riga Maternity Hospital',
      notes: 'Bring previous ultrasound results'
    },
    {
      id: 2,
      title: 'Second Trimester Ultrasound',
      doctor: 'Dr. Līga',
      date: 'October 28, 2025',
      time: '2:15 PM',
      location: 'Women\'s Health Center',
      notes: 'Full bladder required for this scan'
    },
    {
      id: 3,
      title: 'Prenatal Nutrition Consultation',
      doctor: 'Nutritionist Zane',
      date: 'November 5, 2025',
      time: '11:00 AM',
      location: 'Riga Maternity Hospital',
      notes: 'Bring food diary from the app'
    }
  ];

  // Generate calendar days for display
  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = 31; // Simplified for October
    
    // Add empty slots for days before the month starts (e.g., if October 1st is on a Wednesday)
    for (let i = 0; i < 2; i++) {
      days.push({ day: '', hasAppointment: false });
    }
    
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      // Check if this day has an appointment
      const hasAppointment = upcomingAppointments.some(app => {
        const appDate = app.date.split(', ')[0].split(' ')[1];
        return parseInt(appDate) === i;
      });
      
      days.push({ day: i, hasAppointment });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  
  return (
    <AppointmentsContainer>
      <InfoBox>
        <InfoIcon>ℹ️</InfoIcon>
        <InfoContent>
          <InfoTitle>Your Appointments</InfoTitle>
          <InfoText>Track and manage your prenatal appointments. Tap on a day with an appointment to see details.</InfoText>
        </InfoContent>
      </InfoBox>
      
      <CalendarContainer>
        <CalendarHeader>
          <MonthNavButton>◀</MonthNavButton>
          <CurrentMonth>{currentMonth}</CurrentMonth>
          <MonthNavButton>▶</MonthNavButton>
        </CalendarHeader>
        
        <WeekdaysContainer>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <Weekday key={index}>{day}</Weekday>
          ))}
        </WeekdaysContainer>
        
        <DaysContainer>
          {calendarDays.map((day, index) => (
            <Day key={index} hasAppointment={day.hasAppointment} isEmpty={day.day === ''}>
              {day.day}
              {day.hasAppointment && <AppointmentDot />}
            </Day>
          ))}
        </DaysContainer>
      </CalendarContainer>
      
      <UpcomingTitle>Upcoming Appointments</UpcomingTitle>
      
      <AppointmentsList>
        {upcomingAppointments.map(appointment => (
          <AppointmentCard key={appointment.id}>
            <AppointmentHeader>
              <AppointmentTitle>{appointment.title}</AppointmentTitle>
              <AppointmentDate>{appointment.date}</AppointmentDate>
            </AppointmentHeader>
            
            <AppointmentDetails>
              <DetailItem>
                <DetailIcon>🕒</DetailIcon>
                <DetailText>{appointment.time}</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon>👩‍⚕️</DetailIcon>
                <DetailText>{appointment.doctor}</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon>📍</DetailIcon>
                <DetailText>{appointment.location}</DetailText>
              </DetailItem>
              {appointment.notes && (
                <DetailItem>
                  <DetailIcon>📝</DetailIcon>
                  <DetailText>{appointment.notes}</DetailText>
                </DetailItem>
              )}
            </AppointmentDetails>
            
            <AppointmentActions>
              <ActionButton secondary>Reschedule</ActionButton>
              <ActionButton>Confirm</ActionButton>
            </AppointmentActions>
          </AppointmentCard>
        ))}
      </AppointmentsList>
      
      <AddButton>
        <AddIcon>+</AddIcon>
        Add New Appointment
      </AddButton>
    </AppointmentsContainer>
  );
};

const AppointmentsContainer = styled.div`
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

const CalendarContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const MonthNavButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #757575;
  cursor: pointer;
  
  &:hover {
    color: #E91E63;
  }
`;

const CurrentMonth = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const WeekdaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
`;

const Weekday = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #757575;
  text-align: center;
  padding: 5px;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const Day = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: ${props => props.isEmpty ? 'transparent' : '#333'};
  background-color: ${props => props.hasAppointment ? '#FCE4EC' : 'transparent'};
  border-radius: 20px;
  cursor: ${props => props.hasAppointment ? 'pointer' : 'default'};
  
  &:hover {
    background-color: ${props => props.hasAppointment ? '#F8BBD0' : props.isEmpty ? 'transparent' : '#F5F5F5'};
  }
`;

const AppointmentDot = styled.div`
  position: absolute;
  bottom: 5px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #E91E63;
`;

const UpcomingTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin: 10px 0 5px 0;
`;

const AppointmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AppointmentCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const AppointmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AppointmentTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const AppointmentDate = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #E91E63;
`;

const AppointmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
`;

const DetailIcon = styled.span`
  font-size: 16px;
  margin-right: 10px;
  width: 20px;
  text-align: center;
`;

const DetailText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #333;
`;

const AppointmentActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background-color: ${props => props.secondary ? '#F5F5F5' : '#E91E63'};
  color: ${props => props.secondary ? '#333' : 'white'};
  
  &:hover {
    background-color: ${props => props.secondary ? '#E0E0E0' : '#D81B60'};
  }
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

export default Appointments;

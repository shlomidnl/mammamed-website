import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [activePatient, setActivePatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const patients = [
    {
      id: 1,
      name: 'Līga B.',
      age: 28,
      week: 12,
      risk: 'low',
      alerts: 2,
      lastVisit: '2025-03-15',
      nextVisit: '2025-04-10',
      phone: '+371 2XXXXXXX',
      email: 'liga.b@example.com',
      labResults: [
        { name: 'Hemoglobin', value: '110 g/L', status: 'warning', date: '2025-03-15' },
        { name: 'Glucose', value: '4.8 mmol/L', status: 'normal', date: '2025-03-15' },
        { name: 'sFlt-1/PlGF Ratio', value: '12.5', status: 'normal', date: '2025-03-15' }
      ],
      notes: 'First pregnancy. Mild anemia, recommended iron supplements. Patient reports occasional nausea in the mornings.'
    },
    {
      id: 2,
      name: 'Dace K.',
      age: 32,
      week: 24,
      risk: 'high',
      alerts: 3,
      lastVisit: '2025-03-18',
      nextVisit: '2025-03-25',
      phone: '+371 2XXXXXXX',
      email: 'dace.k@example.com',
      labResults: [
        { name: 'Hemoglobin', value: '105 g/L', status: 'warning', date: '2025-03-18' },
        { name: 'Glucose', value: '6.2 mmol/L', status: 'warning', date: '2025-03-18' },
        { name: 'Blood Pressure', value: '145/90 mmHg', status: 'danger', date: '2025-03-18' }
      ],
      notes: 'Second pregnancy. History of gestational diabetes. Recent elevated blood pressure readings, monitoring closely for preeclampsia.'
    },
    {
      id: 3,
      name: 'Anna O.',
      age: 30,
      week: 8,
      risk: 'moderate',
      alerts: 0,
      lastVisit: '2025-03-20',
      nextVisit: '2025-04-15',
      phone: '+371 2XXXXXXX',
      email: 'anna.o@example.com',
      labResults: [
        { name: 'Hemoglobin', value: '125 g/L', status: 'normal', date: '2025-03-20' },
        { name: 'Thyroid (TSH)', value: '3.8 mIU/L', status: 'warning', date: '2025-03-20' },
        { name: 'Ferritin', value: '35 ng/mL', status: 'normal', date: '2025-03-20' }
      ],
      notes: 'First pregnancy. Slightly elevated TSH, monitoring thyroid function. Patient reports family history of thyroid disorders.'
    }
  ];
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="doctor-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="sidebar-header">
            <Link to="/" className="back-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
            <div className="doctor-info">
              <div className="doctor-name">Dr. Ance Sproge</div>
              <div className="doctor-role">Obstetrician-Gynecologist</div>
            </div>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search patients..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-value">3</div>
              <div className="stat-label">Total Patients</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">1</div>
              <div className="stat-label">High Risk</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">5</div>
              <div className="stat-label">Pending Alerts</div>
            </div>
          </div>
          
          <div className="patients-list">
            <div className="list-header">Patients</div>
            {filteredPatients.map(patient => (
              <div 
                key={patient.id} 
                className={`patient-item ${activePatient === patient.id ? 'active' : ''} ${patient.risk}`}
                onClick={() => setActivePatient(patient.id)}
              >
                <div className="patient-name">{patient.name}</div>
                <div className="patient-info">
                  <span>Week {patient.week}</span>
                  {patient.alerts > 0 && (
                    <span className="alert-badge">{patient.alerts}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="dashboard-content">
          {activePatient ? (
            <div className="patient-details">
              {(() => {
                const patient = patients.find(p => p.id === activePatient);
                return (
                  <>
                    <div className="patient-header">
                      <div>
                        <h2 className="patient-detail-name">{patient.name}</h2>
                        <div className="patient-meta">
                          <span>{patient.age} years</span>
                          <span>Week {patient.week}</span>
                          <span className={`risk-badge ${patient.risk}`}>
                            {patient.risk.charAt(0).toUpperCase() + patient.risk.slice(1)} Risk
                          </span>
                        </div>
                      </div>
                      <div className="patient-actions">
                        <button className="btn btn-primary">Send Message</button>
                      </div>
                    </div>
                    
                    <div className="patient-contact">
                      <div className="contact-item">
                        <div className="contact-label">Phone</div>
                        <div className="contact-value">{patient.phone}</div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-label">Email</div>
                        <div className="contact-value">{patient.email}</div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-label">Last Visit</div>
                        <div className="contact-value">{patient.lastVisit}</div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-label">Next Visit</div>
                        <div className="contact-value">{patient.nextVisit}</div>
                      </div>
                    </div>
                    
                    <div className="section-title">Laboratory Results</div>
                    
                    <div className="lab-results">
                      {patient.labResults.map((lab, index) => (
                        <div key={index} className="lab-result-item">
                          <div className="lab-result-header">
                            <div className="lab-result-name">{lab.name}</div>
                            <div className={`lab-result-status ${lab.status}`}>
                              {lab.status === 'normal' ? 'Normal' : 
                               lab.status === 'warning' ? 'Monitor' : 'Attention'}
                            </div>
                          </div>
                          <div className="lab-result-value">{lab.value}</div>
                          <div className="lab-result-date">{lab.date}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="section-title">Clinical Notes</div>
                    
                    <div className="clinical-notes">
                      <p>{patient.notes}</p>
                    </div>
                    
                    <div className="section-title">App Activity</div>
                    
                    <div className="app-activity">
                      <div className="activity-stat">
                        <div className="activity-value">85%</div>
                        <div className="activity-label">Engagement</div>
                      </div>
                      <div className="activity-stat">
                        <div className="activity-value">12</div>
                        <div className="activity-label">Logins (7 days)</div>
                      </div>
                      <div className="activity-stat">
                        <div className="activity-value">8</div>
                        <div className="activity-label">Tracked Symptoms</div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="no-patient-selected">
              <div className="no-patient-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Select a patient to view details</h3>
              <p>Click on a patient from the list to view their information and lab results.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="demo-controls">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link to="/mother" className="btn btn-secondary">
          View Patient App
        </Link>
      </div>
    </div>
  );
};

export default DoctorDashboard;

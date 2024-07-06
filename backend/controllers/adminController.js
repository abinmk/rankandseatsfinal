import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UploadRound from './UploadRound';
import UploadCourse from './UploadCourse';
import UploadCollege from './UploadCollege';
import GenerateResults from './GenerateResults';
import ManageGeneratedDatasets from './ManageGeneratedDatasets';

const AdminControls = () => {
  const [activeTab, setActiveTab] = useState('round');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'round':
        return <UploadRound />;
      case 'college':
        return <UploadCollege />;
      case 'course':
        return <UploadCourse />;
      case 'results':
        return <GenerateResults />;
      case 'manage':
        return <ManageGeneratedDatasets />;
      default:
        return <UploadRound />;
    }
  };

  return (
    <div className="admin-controls-container">
      <h1 className='admin-controls-heading'>DATA MANAGEMENT</h1>
  
      <div className="content-container">
        <div className="tabs">
          <button className={activeTab === 'round' ? 'active' : ''} onClick={() => setActiveTab('round')}>Upload Round</button>
          <button className={activeTab === 'college' ? 'active' : ''} onClick={() => setActiveTab('college')}>Upload College</button>
          <button className={activeTab === 'course' ? 'active' : ''} onClick={() => setActiveTab('course')}>Upload Course</button>
          <button className={activeTab === 'results' ? 'active' : ''} onClick={() => setActiveTab('results')}>Generate Results</button>
          <button className={activeTab === 'manage' ? 'active' : ''} onClick={() => setActiveTab('manage')}>Manage Datasets</button>
        </div>
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default AdminControls;

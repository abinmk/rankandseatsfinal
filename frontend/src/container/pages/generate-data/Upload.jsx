import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UploadRound from './UploadRound';
import UploadCourse from './UploadCourse';
import UploadCollege from './UploadCollege';
import GenerateResults from './GenerateResults';
import 'bootstrap/dist/css/bootstrap.min.css';

const Upload = () => {
  return (
    <div>
      <h2>Upload Data</h2>
      <Tabs defaultActiveKey="round" id="upload-tabs">
        <Tab eventKey="round" title="Upload Round">
          <UploadRound />
        </Tab>
        <Tab eventKey="course" title="Upload Course">
          <UploadCourse />
        </Tab>
        <Tab eventKey="college" title="Upload College">
          <UploadCollege />
        </Tab>
        <Tab eventKey="generate" title="Generate Data">
          <GenerateResults />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Upload;

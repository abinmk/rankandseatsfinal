import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UploadRound from './UploadRound';
import UploadCourse from './UploadCourse';
import UploadCollege from './UploadCollege';
import UploadFee from './UploadFee'; // Import the UploadFee component
import UploadSeats from './UploadSeats'; // Import the new UploadSeats component
import GenerateResults from './GenerateResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadSeatMatrix from './UploadSeatMatrix';
import UploadAdmittedStudents from './UploadAdmittedStudents';
import GenerateSeatMatrix from './GenerateSeatMatrix';
import GenerateCollege from './GenerateCollege';

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
        <Tab eventKey="fee" title="Upload Fee">
          <UploadFee />
        </Tab>
        <Tab eventKey="seats" title="Upload Seats"> {/* Add a new Tab for UploadSeats */}
          <UploadSeats />
        </Tab>
        <Tab eventKey="seatmatrix" title="Upload Seats Matrix"> {/* Add a new Tab for UploadSeats */}
          <UploadSeatMatrix />
        </Tab>
        <Tab eventKey="allottedStudents" title="Upload Allotted Students"> {/* Add a new Tab for UploadSeats */}
          <UploadAdmittedStudents />
        </Tab>
        <Tab eventKey="generate" title="Generate Data">
          <GenerateResults />
          <br/>
          <GenerateCollege />
        </Tab>
        <Tab eventKey="generateseatmatrix" title="Generate Seat Matrix">
          <GenerateSeatMatrix />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Upload;

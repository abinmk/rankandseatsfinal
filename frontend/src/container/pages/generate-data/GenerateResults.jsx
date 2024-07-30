import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GenerateResults.css';

function GenerateResults() {
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [year, setYear] = useState('');
  const [resultName, setResultName] = useState('');
  const [availableAllotments, setAvailableAllotments] = useState([]);
  const [selectedAllotments, setSelectedAllotments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;  // Access the environment variable

  useEffect(() => {
    if (exam) {
      fetchAvailableAllotments(exam, examType);
    }
  }, [exam, year, examType]);

  const fetchAvailableAllotments = async (exam, type) => {
    try {
      const response = await axios.get(`${API_URL}/list-available-allotments`, {
        params: { examName: `${exam}_${type}`},
      });
      setAvailableAllotments(response.data.allotments || []);
    } catch (error) {
      console.error('Error fetching available allotments', error);
      setAvailableAllotments([]);
    }
  };

  const onGenerateResults = async () => {
    if (!exam || !examType || selectedAllotments.length === 0) {
      alert('Please fill all fields.');
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(`${API_URL}/generate-combined-dataset`, {
        examName: `${exam}_${examType}`,
        rounds: selectedAllotments,
      });
      alert('Combined results generated successfully');
    } catch (error) {
      alert('Error generating combined results');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="generate-results-container">
      <div className="generate-results-group">
        <label className="generate-results-label" htmlFor="exam">Exam</label>
        <select className="generate-results-select" id="exam" value={exam} onChange={(e) => setExam(e.target.value)}>
          <option value="">Select Exam</option>
          <option value="NEET_PG">NEET_PG</option>
          <option value="NEET_SS">NEET_SS</option>
          <option value="INI_CET">INI_CET</option>
        </select>
      </div>
      <div className="generate-results-group">
        <label className="generate-results-label" htmlFor="examType">Exam Type</label>
        <select className="generate-results-select" id="examType" value={examType} onChange={(e) => setExamType(e.target.value)}>
          <option value="">Select Exam Type</option>
          <option value="ALL_INDIA">ALL_INDIA</option>
          <option value="STATE">STATE</option>
        </select>
      </div>
      <div className="generate-results-group">
        <label className="generate-results-label" htmlFor="availableAllotments">Available Allotments</label>
        <select
          className="generate-results-select"
          id="availableAllotments"
          multiple
          value={selectedAllotments}
          onChange={(e) => setSelectedAllotments(Array.from(e.target.selectedOptions, option => option.value))}
        >
          {availableAllotments.map((allotment) => (
            <option key={allotment} value={allotment}>
              {allotment}
            </option>
          ))}
        </select>
      </div>
      <button className="generate-results-button" type="button" onClick={onGenerateResults} disabled={isLoading}>
        {isLoading ? 'Generating Results...' : 'Generate Results'}
      </button>
    </form>
  );
}

export default GenerateResults;

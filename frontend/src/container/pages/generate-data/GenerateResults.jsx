// src/components/GenerateResults.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GenerateResults.css';

function GenerateResults() {
  const [examName, setExamName] = useState('');
  const [year, setYear] = useState('');
  const [resultName, setResultName] = useState('');
  const [availableDataSets, setAvailableDataSets] = useState([]);
  const [selectedDataSets, setSelectedDataSets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (examName && year) {
      fetchAvailableDataSets(examName, year);
    }
  }, [examName, year]);

  const fetchAvailableDataSets = async (exam, year) => {
    try {
      const response = await axios.get('http://localhost:5001/api/available-datasets', {
        params: { examName: exam, year: year },
      });
      setAvailableDataSets(response.data.availableDataSets || []);
    } catch (error) {
      console.error('Error fetching available data sets', error);
      setAvailableDataSets([]);
    }
  };

  const onGenerateResults = async () => {
    if (!examName || !resultName || !year || selectedDataSets.length === 0) {
      alert('Please fill exam name, result name, year, and select data sets.');
      return;
    }

    setIsLoading(true);
    try {
      await axios.post('http://localhost:5001/api/generate', {
        examName,
        resultName,
        year,
        selectedDataSets,
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
        <label className="generate-results-label" htmlFor="examName">Exam Name</label>
        <select className="generate-results-select" id="examName" value={examName} onChange={(e) => setExamName(e.target.value)}>
          <option value="">Select Exam</option>
          <option value="NEET_PG_ALL_INDIA">NEET_PG_ALL_INDIA</option>
          <option value="NEET_PG_STATE">NEET_PG_STATE</option>
          <option value="INI_CET">INI_CET</option>
          <option value="NEET_SS">NEET_SS</option>
        </select>
      </div>
      <div className="generate-results-group">
        <label className="generate-results-label" htmlFor="year">Year</label>
        <select className="generate-results-select" id="year" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {Array.from({ length: 16 }, (_, i) => 2015 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="generate-results-group">
        <label className="generate-results-label" htmlFor="availableDataSets">Available Data Sets</label>
        <select
          className="generate-results-select"
          id="availableDataSets"
          multiple
          value={selectedDataSets}
          onChange={(e) => setSelectedDataSets(Array.from(e.target.selectedOptions, option => option.value))}
        >
          {availableDataSets.map((dataSet) => (
            <option key={dataSet} value={dataSet}>
              {dataSet}
            </option>
          ))}
        </select>
      </div>
      <div className="generate-results-group">
        <label className="generate-results-label" htmlFor="resultName">Result Name</label>
        <input className="generate-results-input" type="text" id="resultName" value={resultName} onChange={(e) => setResultName(e.target.value)} />
      </div>
      <button className="generate-results-button" type="button" onClick={onGenerateResults} disabled={isLoading}>
        {isLoading ? 'Generating Results...' : 'Generate Results'}
      </button>
    </form>
  );
}

export default GenerateResults;

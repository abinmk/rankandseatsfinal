import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import './GenerateResults.css';

function GenerateCollege() {
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [availableAllotments, setAvailableAllotments] = useState([]);
  const [selectedAllotments, setSelectedAllotments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;  // Access the environment variable

  useEffect(() => {
    if (exam && examType) {
      fetchAvailableAllotments(exam, examType);
    }
  }, [exam, examType]);

  const fetchAvailableAllotments = async (exam, type) => {
    try {
      console.log(`Fetching available allotments for exam: ${exam}, type: ${type}`);
      const response = await axiosInstance.get(`${API_URL}/dataset/list-available-allotments`, {
        params: { examName: `${exam}_${type}` },
      });
      console.log('Available allotments response:', response.data);
      setAvailableAllotments(response.data.allotments || []);
    } catch (error) {
      console.error('Error fetching available allotments', error);
      setAvailableAllotments([]);
    }
  };

  const onGenerateResults = async () => {
    setIsLoading(true);
    try {
      await axiosInstance.post(`${API_URL}/dataset/generate-combined-college`, {
        examName: `EXAM:${exam}_TYPE:${examType}`,
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
      <button className="generate-results-button" type="button" onClick={onGenerateResults} disabled={isLoading}>
        {isLoading ? 'Generating College Results...' : 'Generate College Results'}
      </button>
    </form>
  );
}

export default GenerateCollege;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteDataset = (props) => {
  const [datasets, setDatasets] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/available-datasets');
        if (Array.isArray(response.data)) {
          setDatasets(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
          setMessage('Failed to load datasets.');
        }
      } catch (error) {
        setMessage(`Error fetching datasets: ${error.response?.data?.message || error.message}`);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (datasetName) => {
    try {
      await axios.post('/admin/resources/<your-resource-name>/actions/deleteDataset', { datasetName });
      setMessage(`Dataset ${datasetName} has been deleted.`);
      setDatasets(datasets.filter(dataset => dataset !== datasetName));
    } catch (error) {
      setMessage(`Error deleting dataset: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div>
      <h1>Delete Dataset</h1>
      {datasets.length === 0 ? (
        <p>No datasets available</p>
      ) : (
        <ul>
          {datasets.map(dataset => (
            <li key={dataset}>
              {dataset} <button onClick={() => handleDelete(dataset)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteDataset;

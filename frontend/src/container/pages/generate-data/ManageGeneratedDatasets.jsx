import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageGeneratedDatasets.css';

const ManageGeneratedDatasets = () => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    fetchDatasets();
  }, []);

  const fetchDatasets = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/generated-datasets');
      setDatasets(response.data);
    } catch (error) {
      console.error('Error fetching datasets:', error);
    }
  };

  const handleUpdate = async (id, displayName, includeInAllotments) => {
    try {
      await axios.put(`http://localhost:5001/api/generated-datasets/${id}`, {
        displayName,
        includeInAllotments
      });
      fetchDatasets(); // Refresh the datasets
    } catch (error) {
      console.error('Error updating dataset:', error);
    }
  };

  const handleSelectDataset = async (displayName) => {
    try {
      await axios.post('http://localhost:5001/api/generated-datasets/select', {
        selectedDataset: displayName
      });
      fetchDatasets(); // Refresh the datasets
    } catch (error) {
      console.error('Error selecting dataset:', error);
    }
  };

  return (
    <div className="manage-datasets-container">
      <h2>Manage Generated Datasets</h2>
      {datasets.length === 0 ? (
        <p>No datasets available.</p>
      ) : (
        <table className="datasets-table">
          <thead>
            <tr>
              <th>Dataset Name</th>
              <th>Display Name</th>
              <th>Include in Allotments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {datasets.map(dataset => (
              <tr key={dataset._id}>
                <td>{dataset.collectionName}</td>
                <td>
                  <input
                    type="text"
                    value={dataset.displayName}
                    onChange={(e) => setDatasets(prev => prev.map(d => d._id === dataset._id ? { ...d, displayName: e.target.value } : d))}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={dataset.includeInAllotments}
                    onChange={(e) => setDatasets(prev => prev.map(d => d._id === dataset._id ? { ...d, includeInAllotments: e.target.checked } : d))}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdate(dataset._id, dataset.displayName, dataset.includeInAllotments)}>Save</button>
                  <button onClick={() => handleSelectDataset(dataset.displayName)}>
                  Set as Active
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageGeneratedDatasets;

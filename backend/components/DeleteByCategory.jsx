import React, { useEffect, useState } from 'react';
import { ApiClient } from 'admin-bro';

const api = new ApiClient();

const DeleteByCategory = () => {
  const [datasets, setDatasets] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/api/available-datasets');
        if (Array.isArray(data)) {
          setDatasets(data);
        } else {
          console.error('Invalid data format', data);
          setDatasets([]);
        }
      } catch (error) {
        console.error('Error fetching datasets:', error);
        setDatasets([]);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    if (!selectedDataset) {
      alert('Please select a dataset to delete.');
      return;
    }

    try {
      await api.post('/api/delete-dataset', { datasetName: selectedDataset });
      alert('Dataset deleted successfully');
      setDatasets(datasets.filter(dataset => dataset !== selectedDataset));
      setSelectedDataset('');
    } catch (error) {
      console.error('Error deleting dataset:', error);
      alert('Failed to delete dataset');
    }
  };

  return (
    <div>
      <h1>Delete Dataset</h1>
      <select
        value={selectedDataset}
        onChange={(e) => setSelectedDataset(e.target.value)}
      >
        <option value="">Select Dataset</option>
        {datasets.map((dataset) => (
          <option key={dataset} value={dataset}>{dataset}</option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteByCategory;

import React from 'react';

const FilterItem = ({ filter, onChange }) => {
  const handleChange = (event) => {
    onChange(filter.key, event.target.value);
  };

  return (
    <div className="filter-item">
      <label>{filter.label}</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default FilterItem;

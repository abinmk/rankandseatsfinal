import React from 'react';
import GenericTable from './GenericTable';
import { collegesData, collegesColumns, collegesFiltersConfig } from './collegesConfig';
import './GenericTable.scss';

const Colleges = () => {
  return (
    <GenericTable
      data={collegesData}
      columns={collegesColumns}
      filtersConfig={collegesFiltersConfig}
      headerTitle="Colleges"
    />
  );
};

export default Colleges;

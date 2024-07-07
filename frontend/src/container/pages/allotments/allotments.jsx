import React from 'react';
import GenericTable from './GenericTable';
import { allotmentsData, allotmentsColumns, allotmentsFiltersConfig } from './allotmentsConfig';
import './GenericTable.scss';
import './Allotments.scss';

const Allotments = () => {
  return (
    <GenericTable
      data={allotmentsData}
      columns={allotmentsColumns}
      filtersConfig={allotmentsFiltersConfig}
      headerTitle="Allotments"
    />
  );
};

export default Allotments;

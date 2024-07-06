import React from 'react';
import GenericTable from './GenericTable';
import { coursesData, coursesColumns, coursesFiltersConfig } from './coursesConfig';
import './GenericTable.scss';

const Courses = () => {
  return (
    <GenericTable
      data={coursesData}
      columns={coursesColumns}
      filtersConfig={coursesFiltersConfig}
      headerTitle="Courses"
    />
  );
};

export default Courses;

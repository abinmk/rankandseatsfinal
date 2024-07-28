export const courseColumns = [
  {
    Header: 'Course',
    accessor: 'courseName',
  },
  {
    Header: 'Duration',
    accessor: 'duration',
  },
  {
    Header: 'Clinical Type',
    accessor: 'clinicalType',
  },
  {
    Header: 'Degree Type',
    accessor: 'degreeType',
  },
  {
    Header: 'Course Type',
    accessor: 'courseType',
  },
  {
    Header: 'Total Seats',
    accessor: 'totalSeats',
  },
];

export const courseFiltersConfig = [
  {
    id: 'course',
    label: 'Course Name',  // Add this filter configuration
    type: 'select',
    options: [],
  },
  {
    id: 'clinicalType',
    label: 'Clinical Type',
    type: 'select',
    options: [],
  },
  {
    id: 'degreeType',
    label: 'Degree Type',
    type: 'select',
    options: [],
  },
  {
    id: 'courseType',
    label: 'Course Type',
    type: 'select',
    options: [],
  },
  {
    id: 'duration',
    label: 'Duration',
    type: 'select',
    options: [],
  },

];

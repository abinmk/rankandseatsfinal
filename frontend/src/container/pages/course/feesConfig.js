// // feesConfig.js
// export const feesColumns = [
//   { Header: 'State', accessor: 'state' },
//   { Header: 'Institute', accessor: 'collegeName' },
//   { Header: 'Institute Type', accessor: 'instituteType' },
//   { Header: 'Course', accessor: 'courseName' },
//   { Header: 'Quota', accessor: 'quota' },
//   { Header: 'No. of Seats', accessor: 'noOfSeats' },
//   { Header: 'Hosp Beds', accessor: 'totalHospitalBeds' },
//   { Header: 'Course Fee', accessor: 'feeAmount' },
//   { Header: 'NRI Fee', accessor: 'nriFee' },
//   { Header: 'Stipend Year 1', accessor: 'stipendYear1' },
//   { Header: 'Stipend Year 2', accessor: 'stipendYear2' },
//   { Header: 'Stipend Year 3', accessor: 'stipendYear3' },
//   { Header: 'Bond', accessor: 'bondYear' },
//   { Header: 'Bond Penalty', accessor: 'bondPenality' },
// ];

// export const feesFiltersConfig = [
//   { id: 'collegeName', label: 'College Name', type: 'select', options: [] },
//   { id: 'courseName', label: 'Course Name', type: 'select', options: [] },
//   { id: 'state', label: 'State', type: 'select', options: [] },
//   { id: 'instituteType', label: 'Institute Type', type: 'select', options: [] },
//   { id: 'quota', label: 'Quota', type: 'select', options: [] },
// ];

// courseConfig.js
export const feesColumns = [
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
    accessor: 'totalSeatsInCourse',
  },
];

export const feesFiltersConfig = [
  {
    id: 'courseName',
    label: 'Course Name',
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

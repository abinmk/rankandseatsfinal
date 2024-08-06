// collegesConfig.js

export const collegesColumns = [
  { Header: 'State', accessor: 'state' },
  { Header: 'Institute', accessor: 'collegeName' },
  { Header: 'Institute Type', accessor: 'instituteType' },
  { Header: 'University', accessor: 'universityName' },
  { Header: 'Year of Establishment', accessor: 'yearOfEstablishment' },
  { Header: 'No. of Seats', accessor: 'totalSeatsInCollege' },
  { Header: 'Total Hospital Beds', accessor: 'totalHospitalBeds' },

];

export const collegesFiltersConfig = [
  { id: 'state', label: 'State', type: 'select', options: [] },
  { id: 'collegeName', label: 'Institute', type: 'select', options: [] },
  { id: 'instituteType', label: 'Institute Type', type: 'select', options: [] },
  { id: 'universityName', label: 'University', type: 'select', options: [] },
  { id: 'yearOfEstablishment', label: 'Year of Establishment', type: 'select', options: [] },
  { id: 'totalHospitalBeds', label: 'Beds', type: 'numberRange' },
];

// collegeConfig.js

export const collegeColumns = [
  {
    Header: 'College Name',
    accessor: 'collegeName',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'University Name',
    accessor: 'universityName',
  },
  {
    Header: 'Institute Type',
    accessor: 'instituteType',
  },
  {
    Header: 'Year of Establishment',
    accessor: 'yearOfEstablishment',
  },
  {
    Header: 'Total Hospital Beds',
    accessor: 'totalHospitalBeds',
  },
  {
    Header: 'Nearest Railway Station',
    accessor: 'nearestRailwayStation',
  },
  {
    Header: 'Distance from Railway Station',
    accessor: 'distanceFromRailwayStation',
  },
  {
    Header: 'Nearest Airport',
    accessor: 'nearestAirport',
  },
  {
    Header: 'Distance from Airport',
    accessor: 'distanceFromAirport',
  },
];

export const collegeFiltersConfig = [
  {
    id: 'state',
    label: 'State',
    type: 'select',
    options: [],
  },
  {
    id: 'instituteType',
    label: 'Institute Type',
    type: 'select',
    options: [],
  },
  {
    id: 'universityName',
    label: 'University Name',
    type: 'select',
    options: [],
  },
  {
    id: 'yearOfEstablishment',
    label: 'Year of Establishment',
    type: 'range',
    min: 1900,
    max: new Date().getFullYear(),
  },
  {
    id: 'totalHospitalBeds',
    label: 'Total Hospital Beds',
    type: 'range',
    min: 0,
    max: 10000,
  },
];

import React from 'react';

export const allotmentsColumns = [
  {
    Header: 'Year',
    accessor: 'year',
  },
  {
    Header: 'Round',
    accessor: 'round',
  },
  {
    Header: 'Quota',
    accessor: 'allottedQuota',
  },
  {
    Header: 'Category',
    accessor: 'allottedCategory',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Institute',
    accessor: 'allottedInstitute',
    Cell: ({ value }) => (
      <a
        href={`/college/${encodeURIComponent(value)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'blue', textDecoration: 'none' }}
      >
        {value}
      </a>
    ),
  },
  {
    Header: 'Institute Type',
    accessor: 'instituteType',
  },
  {
    Header: 'Course',
    accessor: 'course',
  },
  {
    Header: 'Seats',
    accessor: 'seats',
  },
  {
    Header: 'Virtual Seats',
    accessor: 'Virtual Seats',
  },
  {
    Header: 'Beds',
    accessor: 'totalHospitalBeds',
  },
  {
    Header: 'Fee',
    accessor: 'feeAmount',
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },
  {
    Header: 'Stipend Year 1',
    accessor: 'stipendYear1',
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },
  {
    Header: 'Bond',
    accessor: 'bondYear',
    Cell: ({ value }) => `${value}`
  },
  {
    Header: 'Bond Penalty',
    accessor: 'bondPenality',
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },

];

export const allotmentsColumnsDisabled = [
  
];

export const allotmentsFiltersConfig = {
  state: '',
  instituteName: '',
  instituteType: '',
  universityName: '',
  course: '',
  courseType: '',
  courseCategory: '',
  degreeType: '',
  courseFees: '',
  quota: '',
  year: '',
  round: '',
  category: '',
  bondYear: [{ min: 0, max: 10 }],
  bondPenality: [{ min: 0, max: 5000000 }],
  beds: [{ min: 0, max: 1000 }],
  rank: [{ min: 0, max: 10000 }],
};

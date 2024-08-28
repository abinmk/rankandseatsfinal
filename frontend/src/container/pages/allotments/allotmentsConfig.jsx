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
    Header: 'Rank',
    accessor: 'rank',
  }, 
  {
    Header: 'Allotted Quota',
    accessor: 'allottedQuota',
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
        style={{ color: 'blue', textDecoration: 'underline' }}
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
    Header: 'Allotted Category',
    accessor: 'allottedCategory',
  },
  {
    Header: 'Fee',
    accessor: 'feeAmount',
  },
  {
    Header: 'Stipend Year 1',
    accessor: 'stipendYear1',
  },
  {
    Header: 'Bond',
    accessor: 'bondYear',
  },
  {
    Header: 'Bond Penalty',
    accessor: 'bondPenality',
  },
  {
    Header: 'Beds',
    accessor: 'totalHospitalBeds',
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

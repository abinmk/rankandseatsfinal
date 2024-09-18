import React from 'react';

export const allotmentsColumns = [
  {
    Header: 'Year',
    accessor: 'admittedYear',
  },
  {
    Header: 'State',
    accessor: 'instituteState',
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
    Header: 'Course',
    accessor: 'course',
  },
  {
    Header: 'Name of the Student',
    accessor: 'studentName',
  },
  {
    Header: 'State of the Student',
    accessor: 'studentState',
  },

  {
    Header: 'Admitted Through',
    accessor: 'admittedBy',
  },
];

export const allotmentsColumnsDisabled = [
  
];

export const allotmentsFiltersConfig = {
  admittedState: '',
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

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
    accessor: 'candidateCategory',
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

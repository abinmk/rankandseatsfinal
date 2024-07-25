export const allotmentsColumns = [
  {
    Header: 'State Name',
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
    Header: 'University',
    accessor: 'universityName',
  },
  {
    Header: 'Course',
    accessor: 'course',
  },
  {
    Header: 'Course Type',
    accessor: 'courseType',
  },
  {
    Header: 'Course Category',
    accessor: 'courseCategory',
  },
  {
    Header: 'Degree Type',
    accessor: 'degreeType',
  },
  {
    Header: 'Course Fees',
    accessor: 'feeAmount',
  },
  {
    Header: 'Quota',
    accessor: 'allottedQuota',
  },
  {
    Header: 'Year',
    accessor: 'year',
  },
  {
    Header: 'Round',
    accessor: 'round',
  },
  {
    Header: 'Category',
    accessor: 'candidateCategory',
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
  {
    Header: 'Rank',
    accessor: 'rank',
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

export const allotmentsData = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  state: ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar"][index % 5],
  instituteName: `Institute ${String.fromCharCode(65 + (index % 26))}`,
  instituteType: ["Private", "Government"][index % 2],
  universityName: `University ${String.fromCharCode(65 + (index % 10))}`,
  course: `Course ${String.fromCharCode(88 + (index % 3))}`,
  courseType: ["Full-time", "Part-time"][index % 2],
  courseCategory: ["Category 1", "Category 2", "Category 3"][index % 3],
  degreeType: ["Degree 1", "Degree 2", "Degree 3"][index % 3],
  courseFees: `${(index + 1) * 1000}`,
  quota: ["All India", "State Quota", "Management Quota"][index % 3],
  year: 2020 + (index % 5),
  round: `R${index % 4 + 1}`,
  category: ["GEN", "OBC", "SC", "ST", "EWS", "PWD"][index % 6],
  bond: `${index * 2}-${index * 3}`,
  bondPenalty: `${index * 5}-${index * 10}`,
  beds: `${index * 10} beds`,
  rank: `${index * 5}-${(index + 1) * 5}`,
}));

export const allotmentsColumns = [
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Institute',
    accessor: 'instituteName',
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
    accessor: 'courseFees',
  },
  {
    Header: 'Quota',
    accessor: 'quota',
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
    accessor: 'category',
  },
  {
    Header: 'Bond',
    accessor: 'bond',
  },
  {
    Header: 'Bond Penalty',
    accessor: 'bondPenalty',
  },
  {
    Header: 'Beds',
    accessor: 'beds',
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
  bond: '',
  bondPenalty: '',
  beds: '',
  rank: ''
};

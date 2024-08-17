export const LastRankColumns = [
  { Header: 'Alloted Quota', accessor: 'quota' },
  { Header: 'Alloted Category', accessor: 'allottedCategory' },
  { Header: 'State', accessor: 'state' },
  { Header: 'College', accessor: 'collegeName' },
  { Header: 'Course', accessor: 'courseName' },
  {
    Header: 'R1', 
    accessor: (row) => row.years['2015'].rounds['1'].lastRank,
    Cell: ({ row }) => {
      const roundData = row.original.years['2015'].rounds['1'];
      const lastRank = roundData.lastRank;
      const totalAllotted = roundData.totalAllotted;
      return `${lastRank} (${totalAllotted})`;
    },
  },
  {
    Header: 'R2',
    accessor: () => '-',  // Placeholder if there is no R2 data
  },
  {
    Header: 'R3',
    accessor: () => '-',  // Placeholder if there is no R3 data
  },
  {
    Header: 'R4',
    accessor: () => '-',  // Placeholder if there is no R4 data
  },
];


export const LastRankFiltersConfig = [
  { id: 'collegeName', label: 'College Name', type: 'select', options: [] },
  { id: 'courseName', label: 'Course Name', type: 'select', options: [] },
  { id: 'state', label: 'State', type: 'select', options: [] },
  { id: 'instituteType', label: 'Institute Type', type: 'select', options: [] },
  { id: 'quota', label: 'Quota', type: 'select', options: [] },
];

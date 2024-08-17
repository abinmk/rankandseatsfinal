export const LastRankColumns = (data) => {
  const years = Object.keys(data[0]?.years || {}).sort((a, b) => b - a).slice(0, 3); // Sort and get latest 3 years

  const rounds = ['1', '2', '3', '4'];

  const columns = [
    { Header: 'Alloted Quota', accessor: 'quota' },
    { Header: 'Alloted Category', accessor: 'allottedCategory' },
    { Header: 'State', accessor: 'state' },
    { Header: 'College', accessor: 'collegeName' },
    { Header: 'Course', accessor: 'courseName' },
    ...years.flatMap((year) =>
      rounds.map((round) => ({
        Header: `${year} [R${round}]`,
        accessor: (row) => row.years[year]?.rounds[round]?.lastRank || '-',
        Cell: ({ row }) => {
          const roundData = row.original.years[year]?.rounds[round];
          if (roundData) {
            const lastRank = roundData.lastRank;
            const totalAllotted = roundData.totalAllotted;
            return `${lastRank} (${totalAllotted})`;
          }
          return '-';
        },
      }))
    ),
  ];

  return columns;
};



export const LastRankFiltersConfig = [
  { id: 'collegeName', label: 'College Name', type: 'select', options: [] },
  { id: 'courseName', label: 'Course Name', type: 'select', options: [] },
  { id: 'state', label: 'State', type: 'select', options: [] },
  { id: 'instituteType', label: 'Institute Type', type: 'select', options: [] },
  { id: 'quota', label: 'Quota', type: 'select', options: [] },
];

export const LastRankColumns = (data, handleDetailClick) => {
  const years = Object.keys(data[0]?.years || {}).sort((a, b) => b - a).slice(0, 3); // Sort and get the latest 3 years
  const rounds = ['1', '2', '3', '4'];

  const columns = [
    { Header: 'Alloted Quota', accessor: 'quota' },
    { Header: 'Alloted Category', accessor: 'allottedCategory' },
    { Header: 'State', accessor: 'state' },
    { Header: 'College', accessor: 'collegeName' },
    { Header: 'Course', accessor: 'courseName' },
    ...years.map((year) => ({
      Header: year, // Main header
      columns: rounds.map((round) => ({
        Header: `R${round}`, // Sub-headers
        id: `${year}_R${round}`, // Unique ID based on year and round
        accessor: (row) => row.years[year]?.rounds[round]?.lastRank || '-',
        Cell: ({ row }) => {
          const roundData = row.original.years[year]?.rounds[round];
          if (roundData) {
            const lastRank = roundData.lastRank;
            const totalAllotted = roundData.totalAllotted;
            return (
              <span
                onClick={() => handleDetailClick(year, round, row.original)}
                style={{ cursor: 'pointer', color: 'blue', textAlign: 'center' }}
              >
                {`${lastRank} (${totalAllotted})`}
              </span>
            );
          }
          return '-';
        },
        disableSortBy: true, // Disable sorting on round columns
        style: { textAlign: 'center' }, // Center align the content
      })),
    })),
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

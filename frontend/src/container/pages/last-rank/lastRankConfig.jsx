export const LastRankColumns = (data, handleDetailClick) => {
  const years = Object.keys(data[0]?.years || {}).sort((a, b) => b - a).slice(0, 3); // Get the latest 3 years
  const rounds = ['1', '2', '3', '4'];

  const columns = [
    { Header: 'Alloted Quota', accessor: 'quota' },
    { Header: 'Alloted Category', accessor: 'allottedCategory' },
    { Header: 'State', accessor: 'state' },
    { Header: 'College', accessor: 'collegeName' },
    { Header: 'Course', accessor: 'courseName' },
    ...years.flatMap((year) => (
      rounds
        .filter(round => data.some(row => row.years[year]?.rounds[round])) // Filter out rounds with no data
        .map((round) => ({
          Header: () => (
            <div style={{ whiteSpace: 'pre-wrap', textAlign: '' }}>
              {`${year}\nR${round}`} {/* Ensure year and round are on separate lines */}
            </div>
          ),
          id: `${year}_R${round}`, // Unique ID
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
                  {`${lastRank}\n(${totalAllotted})`}
                </span>
              );
            }
            return '-';
          },
          disableSortBy: true,
          style: { textAlign: '', whiteSpace: 'pre-wrap' }, // Center-align with multi-line support
        }))
    )),
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

export const generateRoundsColumns = (roundsData) => {
  const columns = [
    { Header: 'College Name', accessor: 'collegeName' },
    { Header: 'Course Name', accessor: 'courseName' },
    { Header: 'Course Fee', accessor: 'courseFee' },
    { Header: 'NRI Fee', accessor: 'nriFee' },
    { Header: 'Stipend Year 1', accessor: 'stipendYear1' },
    { Header: 'Stipend Year 2', accessor: 'stipendYear2' },
    { Header: 'Stipend Year 3', accessor: 'stipendYear3' },
    { Header: 'Bond Year', accessor: 'bondYear' },
    { Header: 'Bond Penalty', accessor: 'bondPenality' },
    { Header: 'Seat Leaving Penalty', accessor: 'seatLeavingPenality' },
    { Header: 'Quota', accessor: 'quota' },
  ];

  // Extracting unique years and rounds from the roundsData
  const yearRoundColumns = [];
  const years = new Set();
  const rounds = new Set();

  roundsData.forEach(row => {
    Object.keys(row.rounds || {}).forEach(key => {
      const [year, round] = key.split('_');
      years.add(year);
      rounds.add(round);
    });
  });

  Array.from(years).forEach(year => {
    Array.from(rounds).forEach(round => {
      yearRoundColumns.push({
        Header: `${year} R${round}`,
        accessor: `rounds.${year}_${round}`,
        Cell: ({ value }) => value || '-',  // Display value or '-' if value is not available
      });
    });
  });

  return [...columns, ...yearRoundColumns];
};

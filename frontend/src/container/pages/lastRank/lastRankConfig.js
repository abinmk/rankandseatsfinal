export const generateRoundsColumns = (data) => {
  if (!data || !data.length) return [];

  const rounds = data[0]?.years ?? {};

  const columns = [
    { Header: 'College Name', accessor: 'collegeName' },
    { Header: 'Course Name', accessor: 'courseName' },
    { Header: 'Allotted Quota', accessor: 'quota' },
    { Header: 'Course Fee', accessor: 'courseFee' },
  ];

  Object.keys(rounds).forEach((year) => {
    Object.keys(rounds[year].rounds).forEach((round) => {
      columns.push({
        Header: `${year} - Round ${round}`,
        accessor: `years.${year}.rounds.${round}.lastRank`,
      });
    });
  });

  return columns;
};

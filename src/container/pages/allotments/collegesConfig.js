export const collegesData = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    name: `College ${String.fromCharCode(65 + (index % 26))}`,
    state: ["California", "Texas", "Florida", "New York", "Illinois"][index % 5],
    city: `City ${String.fromCharCode(65 + (index % 26))}`,
    type: ["Public", "Private"][index % 2],
    rank: index + 1,
  }));
  
  export const collegesColumns = [
    {
      Header: 'College Name',
      accessor: 'name',
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Rank',
      accessor: 'rank',
    },
  ];
  
  export const collegesFiltersConfig = {
    name: '',
    state: '',
    city: '',
    type: '',
    rank: 0
  };
  
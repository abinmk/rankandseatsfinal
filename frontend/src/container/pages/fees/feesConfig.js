// feesConfig.js
export const feesColumns = [
  { Header: 'State', accessor: 'state' },
  { Header: 'Institute', accessor: 'collegeName' },
  { Header: 'Institute Type', accessor: 'instituteType' },
  { Header: 'Course', accessor: 'courseName' },
  { Header: 'Quota', accessor: 'quota' },
  { Header: 'Hosp Beds', accessor: 'totalHospitalBeds' },
  { 
    Header: 'Course Fee', 
    accessor: 'feeAmount', 
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },
  { 
    Header: 'Stipend Year 1', 
    accessor: 'stipendYear1', 
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },
  { 
    Header: 'Stipend Year 2', 
    accessor: 'stipendYear2', 
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },
  { 
    Header: 'Stipend Year 3', 
    accessor: 'stipendYear3', 
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },
  { 
    Header: 'Bond', 
    accessor: 'bondYear', 
    Cell: ({ value }) => `${value} years`
  },
  { 
    Header: 'Bond Penalty', 
    accessor: 'bondPenality', 
    Cell: ({ value }) => `₹${new Intl.NumberFormat('en-IN').format(value)}`
  },
];

export const feesFiltersConfig = [
  { id: 'collegeName', label: 'College Name', type: 'select', options: [] },
  { id: 'courseName', label: 'Course Name', type: 'select', options: [] },
  { id: 'state', label: 'State', type: 'select', options: [] },
  { id: 'instituteType', label: 'Institute Type', type: 'select', options: [] },
  { id: 'quota', label: 'Quota', type: 'select', options: [] },
];

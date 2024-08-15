// ChoiceListConfig.js
export const choiceListColumns = [
    { Header: 'Institute', accessor: 'allotment.allottedInstitute' },
    { Header: 'Course', accessor: 'allotment.course' },
    { Header: 'Category', accessor: 'allotment.allottedCategory' },
  ];
  
  export const choiceListFiltersConfig = [
    {
      id: 'institute',
      label: 'Institute',
      type: 'select',
      options: [],
    },
    {
      id: 'course',
      label: 'Course',
      type: 'select',
      options: [],
    },
    {
      id: 'category',
      label: 'Category',
      type: 'select',
      options: [],
    },
  ];
  
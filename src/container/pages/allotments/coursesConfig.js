export const coursesData = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    courseName: `Course ${String.fromCharCode(65 + (index % 26))}`,
    courseType: ["Full-time", "Part-time"][index % 2],
    courseDuration: `${(index % 4) + 1} years`,
    courseFees: `${(index + 1) * 1000}`,
    instituteName: `Institute ${String.fromCharCode(65 + (index % 26))}`,
    universityName: `University ${String.fromCharCode(65 + (index % 10))}`,
    state: ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar"][index % 5],
    seatsAvailable: `${index * 10}`,
  }));
  
  export const coursesColumns = [
    {
      Header: 'Course Name',
      accessor: 'courseName',
    },
    {
      Header: 'Course Type',
      accessor: 'courseType',
    },
    {
      Header: 'Course Duration',
      accessor: 'courseDuration',
    },
    {
      Header: 'Course Fees',
      accessor: 'courseFees',
    },
    {
      Header: 'Institute (Name)',
      accessor: 'instituteName',
    },
    {
      Header: 'University (Name)',
      accessor: 'universityName',
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'Seats Available',
      accessor: 'seatsAvailable',
    },
  ];
  
  export const coursesFiltersConfig = {
    courseName: '',
    courseType: '',
    instituteName: '',
    state: '',
    courseFees: 0
  };
  
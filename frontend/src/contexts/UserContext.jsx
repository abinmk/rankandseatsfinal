import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);

      // Retrieve exam and examType from localStorage if available
      const storedExam = localStorage.getItem('exam');
      const storedExamType = localStorage.getItem('examType');
      if (storedExam) setExam(storedExam);
      if (storedExamType) setExamType(storedExamType);
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('exam');
    localStorage.removeItem('examType');
    setUser(null);
    setExam('');
    setExamType('');
  };

  const updateExamSelection = (selectedExam, selectedExamType) => {
    localStorage.setItem('exam', selectedExam);
    localStorage.setItem('examType', selectedExamType);
    setExam(selectedExam);
    setExamType(selectedExamType);
  };

  return (
    <UserContext.Provider value={{ user, exam, examType, login, logout, updateExamSelection }}>
      {children}
    </UserContext.Provider>
  );
};

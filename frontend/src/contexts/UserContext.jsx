import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [hasPaid, setHasPaid] = useState(false);  // Payment status

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);

      // Retrieve exam and examType from localStorage if available
      const storedExam = localStorage.getItem('exam');
      const storedExamType = localStorage.getItem('examType');
      const storedHasPaid = localStorage.getItem('hasPaid');
      if (storedExam) setExam(storedExam);
      if (storedExamType) setExamType(storedExamType);
      if (storedHasPaid) setHasPaid(JSON.parse(storedHasPaid));
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
    localStorage.removeItem('hasPaid'); // Clear payment status
    setUser(null);
    setExam('');
    setExamType('');
    setHasPaid(false);
  };

  const updateExamSelection = (selectedExam, selectedExamType) => {
    localStorage.setItem('exam', selectedExam);
    localStorage.setItem('examType', selectedExamType);
    setExam(selectedExam);
    setExamType(selectedExamType);
  };

  const markPaymentComplete = () => {
    localStorage.setItem('hasPaid', true);
    setHasPaid(true);
  };

  return (
    <UserContext.Provider value={{ user, exam, examType, hasPaid, login, logout, updateExamSelection, markPaymentComplete }}>
      {children}
    </UserContext.Provider>
  );
};

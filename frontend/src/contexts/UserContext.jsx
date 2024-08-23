import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [hasPaid, setHasPaid] = useState(false);  // Payment status

useEffect(() => {
  const token = localStorage.getItem('token');
  console.log("Token retrieved from localStorage:", token);
  
  if (token) {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      console.log("Stored user retrieved from localStorage:", storedUser);

      if (storedUser) {
        setUser(storedUser);
      }

      // Additional checks and logging for other stored data
      const storedExam = localStorage.getItem('exam');
      console.log("Stored exam:", storedExam);
      if (storedExam) setExam(storedExam);

      const storedExamType = localStorage.getItem('examType');
      console.log("Stored exam type:", storedExamType);
      if (storedExamType) setExamType(storedExamType);

      const storedHasPaid = localStorage.getItem('hasPaid');
      console.log("Stored hasPaid status:", storedHasPaid);
      if (storedHasPaid) setHasPaid(JSON.parse(storedHasPaid));
    } catch (error) {
      console.error("Error parsing stored data:", error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('exam');
      localStorage.removeItem('examType');
      localStorage.removeItem('hasPaid');
    }
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

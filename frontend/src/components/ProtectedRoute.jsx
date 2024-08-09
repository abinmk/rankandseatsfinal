import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem('token');

  return user && token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

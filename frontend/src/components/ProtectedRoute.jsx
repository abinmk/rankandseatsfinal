import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext); // Access the user from UserContext
  const token = localStorage.getItem('token'); // Check for the token in localStorage

  // If user is authenticated and token exists, allow access to the protected route
  return user && token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

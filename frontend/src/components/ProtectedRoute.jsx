import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext); // Access the user from UserContext
  const token = localStorage.getItem('token'); // Check for the token in localStorage
  const location = useLocation(); // Get the current location

  // If the user is still being loaded, render a loading indicator or null
  if (user === null) {
    return <div>Loading...</div>; // Or replace with a proper loading spinner/component
  }

  // If user is authenticated and token exists, allow access to the protected route
  if (user && token) {
    return children;
  } else {
    // Redirect to login page but preserve the current location
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default ProtectedRoute;

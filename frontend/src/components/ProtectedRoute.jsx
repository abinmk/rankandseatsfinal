import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Spinner from '../components/Spinner/Spinner'; // Import a spinner component

const ProtectedRoute = ({ children, requiredRole, redirectTo = "/login" }) => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const location = useLocation();

  useEffect(() => {
    if (user !== null) {
      setLoading(false); // Stop loading when user data is available
    } else if (!token) {
      setLoading(false); // Stop loading if there's no token (user is not logged in)
    }
  }, [user, token]);

  if (loading) {
    return <Spinner />; // Show loading spinner while determining user status
  }

  // If no user and no token, redirect to login
  if (!user || !token) {
    i(user && !token)
    {
      alert("Session expired. Please log in again.");
    }
    
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }

  // If user exists but doesn't have the required role, redirect
  if (requiredRole && !user.roles.includes(requiredRole)) {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }

  // If user is authenticated and has the required role, allow access
  return children;
};

export default ProtectedRoute;

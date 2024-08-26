import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const AdminRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
    console.log('AdminRoute User:', user); // Debug: Log user object
  }, [user]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while user data is being fetched
  }

  if (!user) {
    return <Navigate to="/login" />; // Redirect to login if user is not authenticated
  }

  if (!user.isAdmin) {
    console.log('User is not admin, redirecting to dashboard'); // Debug: Log redirection reason
    return <Navigate to="/dashboards" />; // Redirect non-admin users to the dashboard
  }

  return children; // Render the admin route if the user is an admin
};

export default AdminRoute;

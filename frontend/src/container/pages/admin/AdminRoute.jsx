import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const AdminRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user === null) {
    return <div>Loading...</div>;  // Wait until user data is available
  }

  if (user && !user.isAdmin) {
    return <Navigate to="/dashboards" />;  // Redirect non-admin users to the dashboard
  }

  return children;  // Render the admin route if the user is an admin
};

export default AdminRoute;

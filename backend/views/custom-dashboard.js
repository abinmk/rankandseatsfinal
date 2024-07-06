import React from 'react';
import { ApiClient, Box, H2, Text } from 'admin-bro';

const api = new ApiClient();

const CustomDashboard = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    api.getDashboard().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Box>
      <H2>Welcome to Rank and Seats Admin Panel</H2>
      <Text>Customize this dashboard to suit your needs.</Text>
    </Box>
  );
};

export default CustomDashboard;

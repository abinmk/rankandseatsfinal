import React from 'react';
import { Box, Button, FormGroup, Input, H2 } from 'admin-bro';

const CustomLogin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Box variant="grey">
      <Box variant="white">
        <H2>Login to Rank and Seats Admin</H2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
          <Button>Login</Button>
        </form>
      </Box>
    </Box>
  );
};

export default CustomLogin;

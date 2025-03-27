// src/pages/Login/Login.js
import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Box } from '@material-ui/core';
import axios from '../../api/axiosInstance';
import { useHistory } from 'react-router-dom';
import { SessionContext } from '../../services/SessionContext';

const Login = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const history = useHistory();
  const { login } = useContext(SessionContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/login', { email, password });
      login(response.data.user);
      history.push('/home');
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Login failed. Please try again.';
      setError(errMsg);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} mb={4}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;

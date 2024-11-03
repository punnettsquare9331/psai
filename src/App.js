import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import ChatbotMockup from './ChatbotMockup';
import './App.css';

function App() {
  const handleSignupRedirect = () => {
    window.location.href = 'https://your-mailchimp-signup-url.com';
  };

  return (
    <div className="app-container">
      <Container maxWidth="md" className="content-container">
        <Box className="center-content">
          <Typography variant="h1" component="h1" className="psai-logo">
            <TypeAnimation
              sequence={['ps.ai']}
              wrapper="span"
              speed={500}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
            />
          </Typography>
          <Typography variant="h5" className="headline">
            transform the way we understand minds.
          </Typography>
          <button
            variant="outlined"
            className="signup-btn"
            onClick={handleSignupRedirect}
            style={{ marginTop: '10px', background: '#ff4081', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px' }}
          >
            sign up for updates
          </button>
          <button
            variant="outlined"
            className="signup-btn"
            onClick={handleSignupRedirect}
            style={{ marginTop: '10px', marginLeft: '10px', background: '#ff4081', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px' }}
          >
            try it out 
          </button>
        </Box>
      </Container>
      <ChatbotMockup></ChatbotMockup>


        <Typography variant="body2" color="inherit" style={{ textAlign: "center" }}
        >
          &copy; 2024 ps.ai. All rights reserved.
        </Typography>
            </div>
  );
}

export default App;

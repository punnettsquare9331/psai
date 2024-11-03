import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';

const conversation = [
  { sender: 'bot', text: "Hello! Welcome to our service." },
  { sender: 'user', text: "Hi! What do you offer?" },
  { sender: 'bot', text: "We provide AI-powered solutions and personalized support." },
  { sender: 'user', text: "That's interesting! How can I get more information?" },
  { sender: 'bot', text: "You can reach us at info@example.com or visit our website." },
  { sender: 'user', text: "Thank you for your help!" },
  { sender: 'bot', text: "You're welcome! Have a great day!" },
];

function ConversationMocker() {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Autoplay the conversation
  useEffect(() => {
    if (currentMessageIndex < conversation.length) {
      const timeout = setTimeout(() => {
        setMessages((prev) => [...prev, conversation[currentMessageIndex]]);
        setCurrentMessageIndex((prev) => prev + 1);
      }, 1500); // Faster, smoother autoplay
      return () => clearTimeout(timeout);
    }
  }, [currentMessageIndex]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px', // Softer, less pronounced rounding
          padding: 1,
          backgroundColor: '#ffffff', // White background for a clean look
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)', // Lighter shadow for a more delicate effect
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" align="center" sx={{ color: '#555', fontWeight: 500, marginBottom: 2 }}>
          ps.ai 
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            paddingRight: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px', // Smaller gaps for a compact layout
          }}
        >
          {messages.map((message, index) => (
            <Paper
              key={index}
              elevation={1} // Very subtle elevation
              sx={{
                padding: '8px 12px',
                borderRadius: '16px', // Softer, more rounded bubbles
                backgroundColor: message.sender === 'bot' ? '#f3e5f5' : '#e0f7fa', // Light, airy colors
                color: '#333',
                alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
                maxWidth: '70%',
                fontSize: '0.875rem',
                lineHeight: 1.4,
                boxShadow: 'none', // Remove heavy shadow for a lighter feel
              }}
            >
              <Typography variant="body2">{message.text}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default ConversationMocker;

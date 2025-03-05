import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <Container>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom>
            Hi, I'm Ryan Garner
          </Typography>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Software Engineer
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px' }}>
            I craft elegant solutions to complex problems, building software that makes a difference.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Landing;

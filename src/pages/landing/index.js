import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          pt: 8
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%' }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#00bcd4',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.75rem' }
            }}
          >
            Ryan Garner
          </Typography>
          
          <Typography
            variant="h3"
            sx={{
              color: '#fff',
              fontWeight: 600,
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: '1.75rem', md: '2.5rem' }
            }}
          >
            Software Engineer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              opacity: 0.9,
              mb: 6,
              maxWidth: '600px',
              lineHeight: 1.8
            }}
          >
            I build modern web applications with a focus on user experience and accessibility. 
            Specializing in React, Node.js, and cloud technologies to create impactful solutions 
            that make a difference.
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              component={Link}
              to="/projects"
              variant="outlined"
              size="large"
              sx={{
                color: '#00bcd4',
                borderColor: '#00bcd4',
                mr: 2,
                '&:hover': {
                  borderColor: '#00bcd4',
                  bgcolor: 'rgba(0, 188, 212, 0.08)'
                }
              }}
            >
              View Projects
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="text"
              size="large"
              sx={{
                color: '#fff',
                '&:hover': {
                  color: '#00bcd4',
                  bgcolor: 'rgba(0, 188, 212, 0.08)'
                }
              }}
            >
              About Me
            </Button>
          </motion.div>

          <Box sx={{ mt: 12 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  opacity: 0.7,
                  fontStyle: 'italic'
                }}
              >
                Currently working on: Gluten-Free Recipe Finder - Helping people with Celiac Disease find safe recipes
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Landing;

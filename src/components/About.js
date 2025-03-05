import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom>
            About Me
          </Typography>
          <Paper elevation={0} sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)' }}>
            <Typography variant="body1" paragraph>
              I'm a passionate software engineer with a deep interest in building scalable and efficient solutions. 
              My journey in software development has led me to work with various technologies and frameworks, 
              always striving to create meaningful impact through code.
            </Typography>
            <Typography variant="body1" paragraph>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Technical Skills
            </Typography>
            <Typography variant="body1">
              JavaScript/TypeScript • React • Node.js • Python • SQL • AWS • Docker
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'EcoTrack Analytics Platform',
    description: 'A real-time environmental monitoring dashboard built with React and Node.js. Features include interactive data visualization, predictive analytics using machine learning models, and automated reporting systems. Achieved 40% improvement in data processing efficiency.',
    image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'TensorFlow.js', 'AWS', 'D3.js'],
    link: 'https://github.com/example/ecotrack'
  },
  {
    title: 'SecureChat Messenger',
    description: 'End-to-end encrypted messaging application with real-time translation capabilities. Implements WebRTC for peer-to-peer communication and supports file sharing with blockchain-based verification.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Solidity', 'TypeScript'],
    link: 'https://github.com/example/securechat'
  },
  {
    title: 'DevOps Automation Suite',
    description: 'Comprehensive CI/CD pipeline automation tool that integrates with multiple cloud providers. Reduced deployment time by 60% and implemented infrastructure-as-code practices across 20+ microservices.',
    image: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&q=80',
    technologies: ['Python', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    link: 'https://github.com/example/devops-suite'
  }
];

const Projects = () => {
  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              color: '#00bcd4',
              fontWeight: 600,
              mb: 4
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projectList.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      bgcolor: 'rgba(0, 188, 212, 0.05)',
                      border: '1px solid rgba(0, 188, 212, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        bgcolor: 'rgba(0, 188, 212, 0.08)',
                        border: '1px solid rgba(0, 188, 212, 0.2)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(0, 188, 212, 0.1)'
                      }}
                    />
                    <CardContent>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{ 
                          color: '#00bcd4',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#fff',
                          mb: 3,
                          lineHeight: 1.6
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(0, 188, 212, 0.1)',
                              color: '#00bcd4',
                              border: '1px solid rgba(0, 188, 212, 0.2)',
                              '&:hover': {
                                bgcolor: 'rgba(0, 188, 212, 0.15)'
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects;

import React from 'react';
import { Container, Typography, Box, Grid, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const skills = {
  'Frontend Development': [
    'React',
    'TypeScript',
    'Material-UI',
    'Framer Motion',
    'HTML5/CSS3',
    'Responsive Design'
  ],
  'Backend Development': [
    'Node.js',
    'Python',
    'RESTful APIs',
    'Database Design',
    'Cloud Services'
  ],
  'DevOps & Tools': [
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Git',
    'AWS',
    'Terraform'
  ]
};

const About = () => {
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
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    color: '#fff',
                    opacity: 0.9,
                    lineHeight: 1.8
                  }}
                >
                  Hi! I'm Ryan Garner, a passionate software engineer focused on creating elegant solutions to complex problems. 
                  With a deep understanding of both frontend and backend development, I specialize in building modern web applications 
                  that prioritize user experience and accessibility.
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    color: '#fff',
                    opacity: 0.9,
                    lineHeight: 1.8
                  }}
                >
                  My recent work includes developing a gluten-free recipe finder to help people with Celiac Disease, 
                  implementing secure messaging systems, and automating DevOps workflows. I'm particularly interested 
                  in projects that make a positive impact on people's lives.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: 'rgba(0, 188, 212, 0.05)',
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                    borderRadius: 2
                  }}
                >
                  <Typography 
                    variant="h5"
                    sx={{ 
                      color: '#00bcd4',
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    Technical Skills
                  </Typography>

                  <Stack spacing={3}>
                    {Object.entries(skills).map(([category, skillList]) => (
                      <Box key={category}>
                        <Typography 
                          variant="subtitle1"
                          sx={{ 
                            color: '#00bcd4',
                            mb: 2,
                            opacity: 0.9
                          }}
                        >
                          {category}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                          {skillList.map((skill, index) => (
                            <Chip
                              key={index}
                              label={skill}
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
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    bgcolor: 'rgba(0, 188, 212, 0.05)',
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                    borderRadius: 2,
                    textAlign: 'center'
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{ 
                      color: '#00bcd4',
                      mb: 2
                    }}
                  >
                    Let's Connect!
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: '#fff',
                      opacity: 0.9
                    }}
                  >
                    Feel free to reach out at{' '}
                    <Typography
                      component="a"
                      href="mailto:RLloydGarner@gmail.com"
                      sx={{
                        color: '#00bcd4',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      RLloydGarner@gmail.com
                    </Typography>
                    {' '}or check out my projects on{' '}
                    <Typography
                      component="a"
                      href="https://github.com/BobbyChiller"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#00bcd4',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      GitHub
                    </Typography>
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;

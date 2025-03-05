import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0, 188, 212, 0.1)',
        background: 'rgba(10, 25, 47, 0.8)'
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button 
            component={Link} 
            to="/" 
            sx={{ 
              color: '#00bcd4',
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'rgba(0, 188, 212, 0.08)'
              }
            }}
          >
            Ryan Garner
          </Button>
        </Box>
        <Button 
          component={Link} 
          to="/projects" 
          sx={{ 
            color: '#fff',
            mx: 1,
            '&:hover': {
              color: '#00bcd4',
              bgcolor: 'rgba(0, 188, 212, 0.08)'
            }
          }}
        >
          Projects
        </Button>
        <Button 
          component={Link} 
          to="/about" 
          sx={{ 
            color: '#fff',
            ml: 1,
            '&:hover': {
              color: '#00bcd4',
              bgcolor: 'rgba(0, 188, 212, 0.08)'
            }
          }}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

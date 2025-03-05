import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/" color="inherit">
            Ryan Garner
          </Button>
        </Box>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

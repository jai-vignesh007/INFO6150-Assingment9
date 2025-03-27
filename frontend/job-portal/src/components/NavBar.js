// src/components/NavBar.js
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { SessionContext } from '../services/SessionContext';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
  link: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { user, logout } = useContext(SessionContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title} component={Link} to="/home">
          Job Portal
        </Typography>
        <Button component={Link} to="/home" color="inherit" className={classes.link}>Home</Button>
        <Button component={Link} to="/about" color="inherit" className={classes.link}>About</Button>
        <Button component={Link} to="/job-listings" color="inherit" className={classes.link}>Job Listings</Button>
        <Button component={Link} to="/contact" color="inherit" className={classes.link}>Contact</Button>
        <Button component={Link} to="/company-showcase" color="inherit" className={classes.link}>Company Showcase</Button>
        {user && (
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

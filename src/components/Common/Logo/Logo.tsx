import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '9px'
  }
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="/" style={{fontSize: 30, textDecoration: 'none'}}>
      <Typography style={{fontSize: 48, textDecoration: 'none'}} variant="h1" component="div" color="primary">
        <span style={{color: '#fcba03'}}>P</span>
        <span style={{color: '#4caf50'}}>W</span>
      </Typography>
    </Link>
  );
};

export default Logo;

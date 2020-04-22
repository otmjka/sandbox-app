import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import messages from './messages';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '9px'
  }
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="/">
      <Typography variant="h1" component="div" color="primary">
        PW
      </Typography>
    </Link>
  );
};

export default Logo;

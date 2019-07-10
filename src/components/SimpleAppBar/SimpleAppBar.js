import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" top="0" color="primary">
        <Toolbar style={{backgroundColor:"black"}}>
          <Typography variant="h6" color="inherit">
            10DECODERS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
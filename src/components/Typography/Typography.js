import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
title: {
    flexGrow: 1,
    color: 'white',
    marginLeft: '12px'
  },
})
)
export default function Typographylabel(props) {
    const classes = useStyles();
    return (
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {props.label}
        </Typography>
    )
}

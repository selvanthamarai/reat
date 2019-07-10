import React, { useState } from 'react';
// import { MemoryRouter as Router } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Textfield from '../components/TextFieldComonent/Textfield';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleAppBar from '../components/SimpleAppBar/SimpleAppBar';
import MadeWithLove from '../components/Footer/Footer'
import SignInButton from '../components/ApproveRejectButton/ApproveRejectButtons'
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn(props) {
  const classes = useStyles();

  const navToOtherPage = () => {
    console.log("buttonbuttonbuttonbuttonbutton", props);
    props.history.push('/dashboard', { type: "DashBoard" });
  };
  const [values, setvalues] = useState({ email: '', password: '' })
  const changeHandler = event => {
    const { name, value } = event.target
    setvalues({ ...values, [name]: value })
  }
  const submitHandler = event=>{
    console.log("submitHandler",props)
    const{email,password}=values;
    event.preventDefault();
    if ( !email || !password) return
    axios.post(
      'https://jsonplaceholder.typicode.com/posts', values
    ).then(response => {
      console.log("response", response)
    props.history.push('/dashboard', { type: "User" });
    })
      .catch(error => {
        console.log("error", error)
      })

  } 
  return (
    <div>
      <SimpleAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Textfield name="email" id="email" label="Email Address" type="email" autoComplete="email" variant="outlined" sms="false" autof={true} onchange={changeHandler} />
              <Textfield name="password" id="password" label="Password" type="password" autoComplete="current-password" variant="outlined" sms="false" autof={false} onchange={changeHandler} />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <SignInButton type="submit" full={true} variant="contained" color="primary" className={classes.submit} label="Sign In"  />
            {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={navToOtherPage}
          >
            Sign In
          </Button> */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <MadeWithLove />
        </Box>
      </Container>
    </div>
  );
}

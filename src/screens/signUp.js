import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Textfield from '../components/TextFieldComonent/Textfield';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleAppBar from '../components/SimpleAppBar/SimpleAppBar';
import SignUpButton from '../components/ApproveRejectButton/ApproveRejectButtons'
import MadeWithLove from '../components/Footer/Footer'
import { Already } from '../components/Link/Link'
import axios from 'axios';
import OptionField from '../components/OptionField/OptionType'

// import { BrowserRouter } from 'react-router-dom';



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

export default function SignUp(props) {
  console.log("signupprop",props)
  const classes = useStyles();
  const [values, setValues] = useState({ firstname: '', lastname: '', doj:'', email: '', password: '', department:'' })

  const changeHandler = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }
  const getValue = value => {
    console.log('value', value)
    setValues({ ...values, ['department']: value })
  }

  const submitHandler = event => {
    const { firstname, lastname, email, password,doj,department } = values
    event.preventDefault();
    if (!department || !firstname || !lastname || !email || !password || !doj) return
    // axios.post(
    //   'localhost:3000/employee', values
    // ).then(response => {
    //   console.log("response", response)
      // props.history.push('/signin');

    // })
    //   .catch(error => {
    //   props.history.push('/signin',values);
    //     console.log("error", error)
    //   })

    fetch('http://localhost:5000/employee', 
      {method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },   body: JSON.stringify(values)
    })
  .then(response => {
  console.log("response",response)
       props.history.push('/signin');

  }
  )
  .catch(e => console.log(e));
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
            Sign up
        </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Textfield name="firstname" id="firstName" type="text" label="First Name" autoComplete="fname" variant="outlined" sms="6" autof={true} value={values.firstname} onchange={changeHandler} />
              <Textfield name="lastname" id="lastName" type="text" label="Last Name" autoComplete="lname" variant="outlined" sms="6" autof={false} value={values.lastname} onchange={changeHandler} />
              <Textfield name="doj" id="joiningdate" type="date" label="Joining Date" autoComplete="jdate" variant="outlined" sms="false" autof={false} value={values.doj} onchange={changeHandler} />
              <OptionField getValue={getValue} values={["Backend", "UI", "Testing", "HR","FullStack"]} label="Department"/>
              <Textfield name="email" id="email" type="email" label="Email Address" autoComplete="email" variant="outlined" sms="false" autof={false} value={values.email} onchange={changeHandler} />
              <Textfield name="password" id="password" type="password" label="Password" autoComplete="current-password" variant="outlined" sms="false" autof={false} value={values.password} onchange={changeHandler} />
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <SignUpButton type="submit" full={true} variant="contained" color="primary" className={classes.submit} label="Sign Up" />
            <Already />
          </form>
        </div>
        <Box mt={5}>
          <MadeWithLove />
        </Box>
      </Container>
    </div>
  );
}

import React, { useState, useEffect } from 'react'
import {useAsyncEndpoint} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Textfield from '../TextFieldComonent/Textfield';
import OptionField from '../OptionField/OptionType';
import logo from '../Logo/logo.svg'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleAppBar from '../SimpleAppBar/SimpleAppBar';
import MadeWithLove from '../Footer/Footer'
import LeaveButton from '../ApproveRejectButton/ApproveRejectButtons'
import axios from 'axios';
import {User,Addexpenses} from '../constant/tableconstant'
import Table from '../TablePagination/Table'
// import { BrowserRouter as link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },

}));


export default function SignUp(props) {
  const classes = useStyles();

  console.log('permissionprops',props)
 

  const [values, setValues] = useState({ empname:'',employeeid:'',leavereason: '', startdate: '', enddate: '',leavetype:'' });

  const changeHandler = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }
  const getValue = value => {
    console.log('permission value', value)
    setValues({ ...values, ['leavetype']: value })
  }

  const submitHandler = e => {
    console.log('sss', values)
    const { empname,employeeid,leavereason, startdate, enddate, leavetype } = values
    
    if (!empname || !employeeid || !leavereason || !startdate || !enddate || !leavetype) return
    e.preventDefault();
    // axios.post(
    //   'https://jsonplaceholder.typicode.com/posts',values
    // ).then(response=>{
    //   console.log("response",response)
    // })
    // .catch(error=>{
    //   console.log("error",error)
    // })
    // console.log("permision", values)
    // props.prop.history.push('/dashboard', { type: 'Leave Application' });
    fetch('http://localhost:5000/employee/{id}/leave', 
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
.catch(e => console.log("hi",e));
}

console.log('SSSS', values)
  return (
    <div>
      {/* <SimpleAppBar /> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={logo} alt="logo" />
          </Avatar>
          <Typography component="h1" variant="h5">
          {props.prop.location.state.actual_type==="User"?"Leave Request form":"Expense submit form"}
          
          {/* {props.type==="User"?"hello":null} */}
        </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={1}>
            <Textfield name="employeeid" id="employeeid" label="id Number" autoComplete="eid" variant="outlined" sms="6" autof={true} value={values.employeeid} onchange={changeHandler} />
            <Textfield name="empname" id="empname" label="Name" autoComplete="name" variant="outlined" sms="6" autof={false} value={values.empname} onchange={changeHandler} />
            {props.prop.location.state.actual_type==="User"?<Textfield name="leavereason" id="leavereason" label="Leave Reason" autoComplete="lreason" variant="outlined" sms="false" autof={false} value={values.leavereason} onchange={changeHandler} />:null}
              <Textfield name="startdate" id="startdate" label="" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.startdate} onchange={changeHandler} />
              <Textfield name="enddate" id="enddate" label="" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.enddate} onchange={changeHandler} />
              {props.prop.location.state.actual_type==="User"?<OptionField getValue={getValue} values={["Sick","Personal","Casual"]}  label="leave type"/>:null}
              
            </Grid>
            
           
            <Grid container justify="flex-end">
            </Grid>
          </form>
          <br/>
          <FormControlLabel
                   control={<null value="" color="primary" />}
                  label={props.prop.location.state.actual_type==="User"?"I want to receive inspiration, marketing promotions and updates via email.":<Table />}
                />
           <LeaveButton type="submit" full={true} variant="contained" color="primary" className={classes.submit} label="Submit" />
        </div>

        <Box mt={5}>
          {/* <MadeWithLove /> */}
        </Box>
      </Container>
    </div>
  );
}
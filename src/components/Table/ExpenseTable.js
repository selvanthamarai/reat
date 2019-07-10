
// import React, { useState, useEffect } from 'react'
// import {useAsyncEndpoint} from 'react'
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Grid from '@material-ui/core/Grid';
// import Checkbox from '@material-ui/core/Checkbox';
// import Textfield from '../TextFieldComonent/Textfield';
// import OptionField from '../OptionField/OptionType';
// import logo from '../Logo/logo.svg'
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import SimpleAppBar from '../SimpleAppBar/SimpleAppBar';
// import MadeWithLove from '../Footer/Footer'
// import LeaveButton from '../ApproveRejectButton/ApproveRejectButtons'
// import axios from 'axios';
// // import SimpleTable from '../Table/SimpleTable'

// // import { BrowserRouter as link } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(0),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(0),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(2),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 0),
//   },

// }));


// export default function SignUp(props) {
//   const classes = useStyles();

//   console.log('permissionprops',props)
 

//   const [values, setValues] = useState({ empname:'',employeeid:'',leavereason: '', startdate: '', enddate: '',leavetype:'' });

//   const changeHandler = event => {
//     const { name, value } = event.target
//     setValues({ ...values, [name]: value })
//   }
//   const getValue = value => {
//     console.log('permission value', value)
//     setValues({ ...values, ['leavetype']: value })
//   }

//   const submitHandler = e => {
//     console.log('sss', values)
//     const { empname,employeeid,leavereason, startdate, enddate, leavetype } = values
    
//     if (!empname || !employeeid || !leavereason || !startdate || !enddate || !leavetype) return
//     e.preventDefault();
//     // axios.post(
//     //   'https://jsonplaceholder.typicode.com/posts',values
//     // ).then(response=>{
//     //   console.log("response",response)
//     // })
//     // .catch(error=>{
//     //   console.log("error",error)
//     // })
//     // console.log("permision", values)
//     // props.prop.history.push('/dashboard', { type: 'Leave Application' });
//     fetch('http://localhost:5000/employee/{id}/leave', 
//     {method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },   body: JSON.stringify(values)
//   })
// .then(response => {
// console.log("response",response)
//      props.history.push('/signin');

// }
// )
// .catch(e => console.log(e));
// }

// console.log('SSSS', values)
//   return (
//     <div>
//       {/* <SimpleAppBar /> */}
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <img src={logo} alt="logo" />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//              Expenses submit Form
//         </Typography>
//           <form className={classes.form} onSubmit={submitHandler}>
//             <Grid container spacing={1}>
//             <Textfield name="employeeid" id="employeeid" label="Id Number" autoComplete="eid" variant="outlined" sms="6" autof={true} value={values.employeeid} onchange={changeHandler} />
//             <Textfield name="empname" id="empname" label="Name" autoComplete="name" variant="outlined" sms="6" autof={false} value={values.empname} onchange={changeHandler} />
//             {/* <OptionField getValue={getValue} values={["Travel","Food","Services"]}  label="Expense Type"/> */}
//             {/* <Textfield name="leavereason" id="leavereason" label="Item name" autoComplete="lreason" variant="outlined" sms="false" autof={false} value={values.leavereason} onchange={changeHandler} /> */}
//             <Textfield name="startdate" id="startdate" label=" Start Date" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.startdate} onchange={changeHandler} />
//             <Textfield name="enddate" id="enddate" label="End Date" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.enddate} onchange={changeHandler} />
//               {/* <Textfield name="leavereason" id="leavereason" label="Cost" autoComplete="lreason" variant="outlined" sms="false" autof={false} value={values.leavereason} onchange={changeHandler} /> */}
//               {/* <Textfield name="startdate" id="startdate" label="Start Date" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.startdate} onchange={changeHandler} /> */}
//               {/* <Textfield name="enddate" id="enddate" label="End Date" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.enddate} onchange={changeHandler} /> */}
//               {/* <Textfield name="leavereason" id="leavereason" label="No.of items" autoComplete="lreason" variant="outlined" sms="false" autof={false} value={values.leavereason} onchange={changeHandler} />
//               <Textfield name="leavereason" id="leavereason" label="Total Amount" autoComplete="lreason" variant="outlined" sms="false" autof={false} value={values.leavereason} onchange={changeHandler} />
//               <OptionField getValue={getValue} values={["Travel","Food","Services"]}  label="Expense Type"/> */}
//               {/* <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                  label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid> */}
//             </Grid>
          




//             <LeaveButton type="submit" full={true} variant="contained" color="primary" className={classes.submit} label="Submit" />
//             <Grid container justify="flex-end">
//             </Grid>
//           </form>
//         </div>
//         <Box mt={5}>
//           {/* <MadeWithLove /> */}
//         </Box>
//       </Container>
//     </div>
//   );
// }
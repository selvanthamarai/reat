import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Textfield from '../TextFieldComonent/Textfield';
import Tables from '../TablePagination/Table.css'
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  hi : {
    borderCollapse: Collapse,
    minWidth: 50,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

 //const rows = [
//   createData(<input size="auto"/>,<input size="auto"/>,<input size="auto"/>,<input size="auto"/>,<input size="auto"/>),
//   createData(<input size="4"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>),
//   createData(<input size="4"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>),
//   createData(<input size="4"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>),
//   createData(<input size="4"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>,<input size="6"/>),
//  ];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className>
      <Table align="">

      {/* <TableRow>
             <TableCell align="center">Date</TableCell> 
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Receipt</TableCell>
            <TableCell align="center">Amount</TableCell>
             
             
          </TableRow>
       
        
          
            <TableRow >
               {/* {/ <TableCell component="th" scope="row">  /}
              {/ {row.name}  /}
               {/ </TableCell>  /} */}
               {/* <TableCell align="center">
              <Textfield id="expdate"  autoComplete="expname" variant="outlined" sms="9" formate="" type="date" /> 
              </TableCell> 
              <TableCell align="center">
              <Textfield id="expdesc" autoComplete="expdes" variant="outlined" sms="11" /> 
              </TableCell> 
              <TableCell align="center">
              <Textfield id="expdesc" autoComplete="expdes" variant="outlined" sms="10" /> 
              </TableCell>
              <TableCell align="center">
              <Textfield id="expdesc" autoComplete="expdes" variant="outlined" sms="10" />  */}
              {/* </TableCell> */}
            {/* {/ <Textfield name="empname" id="empname" label="Name" autoComplete="name" variant="outlined" sms="6" autof={false} value={values.empname} onchange={changeHandler} /> /}
              {/ <Textfield name="startdate" id="startdate" label="Start Date" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.startdate} onchange={changeHandler} /> /}
              {/ <Textfield name="enddate" id="enddate" label="End Date" autoComplete="lname" variant="outlined" sms="6" formate="" type="date" autof={false} value={values.enddate} onchange={changeHandler} /> /}
              {/ <TableCell align="right"><Textfield size="0" autoComplete="lname" variant="outlined" sms="6" formate=""></Textfield></TableCell> /}
              {/ <TableCell align="right">{row.fat}</TableCell> /}
              {/ <TableCell align="right">{row.carbs}</TableCell> /}
              {/ <TableCell align="right">{row.protein}</TableCell> /} */}
            {/* </TableRow> */}
 























       
           <TableRow>
          <TableCell class="col-sm-3"></TableCell>
            <TableCell class="col-sm-1">  Date</TableCell>
            <TableCell class="col-sm-1">Description</TableCell>
            <TableCell class="col-sm-1">Quantity</TableCell>
            <TableCell class="col-sm-1">Amount</TableCell>
            <TableCell class="col-sm-2"></TableCell>
            <TableCell class="col-sm-3"></TableCell>
          </TableRow>
        

        {/* <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-2">Enter the book Name :</div>

        <div class="col-sm-6"></div>

    </div> */}
 
          <TableRow>
          <TableCell class="col-sm-3"></TableCell>
            <TableCell class="col-sm-1">  <input />    </TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"></TableCell>
            <TableCell class="col-sm-4"></TableCell>
          </TableRow>
         
          <TableRow>
          <TableCell class="col-sm-3"></TableCell>
            <TableCell class="col-sm-1">  <input />    </TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"></TableCell>
            <TableCell class="col-sm-4"></TableCell>
          </TableRow>

          <TableRow>
          <TableCell class="col-sm-3"></TableCell>
            <TableCell class="col-sm-1">  <input />    </TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"></TableCell>
            <TableCell class="col-sm-4"></TableCell>
          </TableRow>

          <TableRow>
          <TableCell class="col-sm-3"></TableCell>
            <TableCell class="col-sm-1">  <input />    </TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"><input /></TableCell>
            <TableCell class="col-sm-1"></TableCell>
            <TableCell class="col-sm-4"></TableCell>
          </TableRow> 

          
 









        {/* <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
          
        </TableBody> */}
      </Table>
    </Paper>
  );
}
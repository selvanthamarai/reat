import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddButton from '../components/Floating-action-Button/button'
import ApproveRejectButton from '../components/ApproveRejectButton/ApproveRejectButtons'
import '../components/Floating-action-Button/styles.css';
import Title from './Title';
import CheckBox from '../components/CheckBoxes/CheckBox'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData('10D01', '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719'),
  createData('10D01', '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574'),
  createData('10D02', '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253'),
  createData('10D03', '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
  createData('10D04', '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),

];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(5),
  },
  margin: {
    margin: theme.spacing(1),
  },
  fab: {
    borderTopRightRadius: 20,
    right: theme.spacing(8),
  },
}));

export default function Orders(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title align="center">List of Leaves</Title>
      <div className="button">
        <AddButton {...props} />
      </div>
      <Table size="mediam">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Date of Joining</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Approve</TableCell>
            <TableCell>Reject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                <CheckBox checked={true}/>
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <ApproveRejectButton  type="submit" variant="contained" full={false} label="Approve" color="primary" />
              </TableCell>
              <TableCell>
                <ApproveRejectButton  type="submit" variant="contained" full={false} label="Reject" color="secondary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
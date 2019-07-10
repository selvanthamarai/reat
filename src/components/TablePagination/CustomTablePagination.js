
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import CheckBox from '../CheckBoxes/CheckBox'
import ApproveRejectButton from '../ApproveRejectButton/ApproveRejectButtons'
import AddButton from '../Floating-action-Button/button'
import AddsButton from '../Floating-action-Button/AddButton'
import Title from '../../dashboard/Title'
import Dashboard from '../../dashboard/Dashboard'
import Post from '../PostList/PostList'
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import { user, manager,viewExpenses,Addexpenses} from '../constant/tableconstant';
// import ExpenseTable from '../Table/ExpenseTable'




const useStyles1 = makeStyles(theme => ({
  root: {
    // display: 'flex',
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};



const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 600,
  }
}));

export default function CustomPaginationActionsTable(props) {
  console.log("cusssss", props)

  const [post, setData] = useState({ posts: [] });

  useEffect(() => {

    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log('result', result)
    setData(result.data);
  };
  console.log("postss", post)


  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);


  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
  }
  function removeRow(id) {
    post.splice(id, 1);
  }
  useEffect(()=>{
    setData(post)
  })
  return (
    <div>
      <Title align="center">{props.heading}</Title>
      <div className="button">
        {props.prop.location.state.type === user? <AddButton {...props} />:

          props.prop.location.state.type === Addexpenses? <AddButton {...props} />:null
          }
        
      </div>
      <Table className={classes.table}>

        <TableHeader type={props.prop.location.state} />

        <TableBody>
          {post.length > 0 && post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
            <TableRow key={row.id}>
              <TableCell>
                <CheckBox checked={true} />
              </TableCell>
              <TableCell >{row.userId}</TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.body}</TableCell>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              {props.prop.location.state && props.prop.location.state.type === manager | props.prop.location.state.type === viewExpenses &&
                <Fragment>
                  <TableCell>
                    <ApproveRejectButton type="submit" variant="contained" full={false} label={props.label[0]} color="primary" />
                  </TableCell>
                  <TableCell onClick={() => removeRow(row.id)}>
                    <ApproveRejectButton type="submit" variant="contained" full={false} label={props.label[1]} color="secondary" />
                  </TableCell>
                </Fragment>
              }
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 4, 5]}
              colSpan={3}
              count={post.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'Rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>

  );
}
import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from '../dashboard/ListItems';
import MadeWithLove from '../components/Footer/Footer'
import Orders from '../dashboard/Orders';
import UserIcon from '../components/UserIcon/UserIcon'
import TablePagination from '../components/TablePagination/TablePagination'
import CustomTablePagination from '../components/TablePagination/CustomTablePagination'


import LeavePage from '../components/permission/Permission'
import { secondaryListItems } from './ListItems'
import Typographylabel from '../components/Typography/Typography'
import Listitems from '../components/ListItem/ListItems';
// import ExpenseTable from '../components/Table/ExpenseTable'



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  text: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 3px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: 'white',
    marginLeft: '12px'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 200,
  },
}));

export default function Dashboard(props) {
  const state = props;
  console.log("state", props);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} style={{ backgroundColor: "black" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

          <Typographylabel label={state.location.state && state.location.state.type} />

          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <UserIcon {...props} />

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography component="h5" variant="h5" color="inherit" noWrap className={classes.title}>
            10DECODERS
          </Typography>
          <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Listitems prop={props.history} /></List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders prop={props}/> */}
                {/* <TablePagination prop={props}/> */}
                <div>
                  {(function () {
                    switch (state.location.state && state.location.state.type) {
                      case 'Manager':
                        return <CustomTablePagination heading="List of leaves" label={["Approve", "Reject"]} prop={props} />;
                      case 'Form':
                        return <LeavePage prop={props} />;
                      // case 'Forms':
                      // return <LeavePage prop={props} />;
                      case 'User':
                        return <CustomTablePagination heading="List of leaves" label={false} prop={props} />;
                      case 'Add Expenses':
                        return <CustomTablePagination heading="List of expenses" label={false} prop={props} />;
                      // case 'Expense Table':
                      // return <ExpenseTable prop={props} />;

                      case 'View Expenses':
                        return <CustomTablePagination heading="List of expenses" label={["View", "Approve"]} prop={props} />;
                      default:
                        return null;
                    }
                  })()}
                </div>
                {/* <CustomTablePagination prop={props}/> */}

                {/* <LeavePage /> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>

  );
}
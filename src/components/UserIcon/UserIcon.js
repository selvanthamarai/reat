import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function PrimarySearchAppBar(props) {
    // console.log("iconprop",props)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleMenuClose() {
        setAnchorEl(null);
        
    }
    function navToLoginPage(){
        props.history.push('/signin');
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
          {/* <MenuItem value={props.values.casual}>Casual</MenuItem> */}
            <MenuItem onClick={navToLoginPage}>Logout</MenuItem>            
        </Menu>
    );

    return (
        <Toolbar>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton
                    edge="end"
                    aria-label="Account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </div>
            {renderMenu}
        </Toolbar>
    );
}
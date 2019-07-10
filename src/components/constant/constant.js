import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export const listitem = [
    {
        type:"Manager",
        icon:<DashboardIcon />,
    },
    {
        type:"User",
        icon:<PeopleIcon />,
        
    },
    {
        type:"Add Expenses",
        icon:<BarChartIcon />,
    
    }, 
    {
        type:"View Expenses",
        icon:<LayersIcon />
        
    },


    
]

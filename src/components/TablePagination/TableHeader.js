
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React, { Fragment } from 'react';
import {viewExpenses,manager} from '../constant/tableconstant'


export default function TableHeader(props) {
    console.log("tableheadprop",props)
    return (
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>{props.type.type==="User"?"Date of Joining":props.type.type==="Manager"?"Date of Joining":"Date of Expenses"}</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>{props.type.type==="User"?"Reason for leaves":props.type.type==="Manager"?"Reason for leaves":"Description"}</TableCell>
                <TableCell>ID</TableCell>
                {props.type && props.type.type === manager | props.type.type === viewExpenses &&
                    <Fragment>
                        <TableCell>{props.type.type==="Manager"?"Approve":"View"}</TableCell>
                        <TableCell>{props.type.type==="Manager"?"Reject":"Approve"}</TableCell>
                    </Fragment>
                }
            </TableRow>
        </TableHead>
    )
}
// type==="User"?"Leaves":type==="Manager"?"leaves":"Expenses"

// (type=="User" && type=="Manager"? )
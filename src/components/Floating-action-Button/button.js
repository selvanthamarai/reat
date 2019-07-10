import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



export default function floatButton(props) {


    const navToPermission = (type) => {
        console.log("hellooooooo", type);
        if (type == "User") {
            console.log("inside user>>>>>>>>>>>")
            props.prop.history.push('/dashboard', { type: 'Form', actual_type:type })
        }
        else {
            props.prop.history.push('/dashboard', { type: 'Form' })
        }

    };
    return (
        <Fab onClick={()=>navToPermission(props.prop.location.state.type)} variant="extended" color="primary" aria-label="Add" className="button" style={{ marginLeft: '90%', marginTop: '-4%' }}>
            <AddIcon />
            {props.prop.location.state.type === "User" ? "Apply" : "Add"}
        </Fab>
    )
}
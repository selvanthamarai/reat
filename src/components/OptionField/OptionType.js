import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 380,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  console.log("propsssssssssss",props)
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    props.getValue(event.target.value)
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
console.log('cc', props, values)
  return (
    <div>{
     <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-leave-simple">
          {props.label}
        </InputLabel>
        <Select
          value={values.leave}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="leave" id="outlined-leave-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        {props.values && props.values.map((data, i)=>(
          <MenuItem value={data}>{data}</MenuItem>
        )
        )}
        
        </Select>
       </FormControl>
     </form>
    }
    </div>
  );
}
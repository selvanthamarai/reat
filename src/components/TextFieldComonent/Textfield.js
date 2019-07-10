import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Textfield extends Component {

  render() {
    const { autoComplete, name, variant, id, label, sms, type, autof, style, formate,value,onchange } = this.props;
    return (
      <Grid item xs={12} sm={sms}>
        <TextField
          autoComplete={autoComplete}
          name={name}
          format={formate}
          className={style}
          variant={variant}
          required
          fullWidth
          id={id}
          label={label}
          type={type}
          value={value}
          autoFocus={autof}
          onChange={onchange}
        />
      </Grid>
    )
  }
}
export default Textfield
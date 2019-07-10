import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const { checkedA } = state;

  return (
    <div>
      <Checkbox
        checked={checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
    </div>
  );
}
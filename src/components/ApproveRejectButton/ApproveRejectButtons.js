import React from 'react';
import Button from '@material-ui/core/Button';



export default function ContainedButtons(props) {
  const { color, label, full, type, variant, className, otherpage } = props;

//   const otherpage = () => {
//     console.log(",,,,,,,,,,,,", props);
//     props.prop.history.push('/dashboard',{type:'Leave Application'});
// };
  return (
    <div>
      <Button variant="contained" color={color}
        className={className}
        variant={variant}
        fullWidth={full}
        type={type}
        onClick={otherpage}>
        {label}
      </Button>
    </div>
  );
}
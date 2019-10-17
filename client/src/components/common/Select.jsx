import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CustomSelect = (props) => {
  const classes = useStyles();
console.log(props)
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel}>
       {props.label}
      </InputLabel>
      <Select
        value={props.value}
        onChange={props.onChange}
        labelWidth={labelWidth}
      >
        {props.items.map((item, index) => {
          return (
            <MenuItem key={index} value={item.id}>{item[props.name]}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default CustomSelect